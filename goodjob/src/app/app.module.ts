import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '@app/core/core.module';
import { AuthModule } from '@app/auth/auth.module';
import { OverlayModule } from '@angular/cdk/overlay';

import { environment } from '@app/environment';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { AppPreloadingStrategy } from './app_preloading_strategy';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: AppPreloadingStrategy
    }),

    OverlayModule,

    CoreModule,
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: AppPreloadingStrategy,
      useClass: AppPreloadingStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
