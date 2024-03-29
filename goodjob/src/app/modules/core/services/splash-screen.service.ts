import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';

@Injectable()
export class SplashScreenService {
  splashScreenEl;
  public player: AnimationPlayer;

  constructor(private animationBuilder: AnimationBuilder,
              @Inject(DOCUMENT) private document: any,
              private router: Router) {
    this.splashScreenEl = this.document.body.querySelector('#splash-screen');

    const hideOnLoad = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.hide();
            hideOnLoad.unsubscribe();
          }, 0);
        }
      }
    );
  }

  show() {
    this.player =
      this.animationBuilder
        .build([
          style({
            opacity: '0',
            zIndex: '99999'
          }),
          animate('400ms ease', style({opacity: '1'}))
        ]).create(this.splashScreenEl);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  hide() {
    this.player =
      this.animationBuilder
        .build([
          style({opacity: '1'}),
          animate('400ms ease', style({
            opacity: '0',
            zIndex: '-10'
          }))
        ]).create(this.splashScreenEl);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }
}
