import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  color = 'accent';

  checked = false;
  labelPosition = 'after';

  @Output() loginSignal = new EventEmitter();
  @Output() logoutSignal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginWithFb() {
    this.loginSignal.emit();
  }

  logoutWithFb() {
    this.logoutSignal.emit();
  }



}
