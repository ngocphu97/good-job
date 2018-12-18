import { Routes } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'sign-up',
        component: SignUpPageComponent
    },
];
