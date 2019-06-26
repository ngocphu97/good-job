import { Component, Output, EventEmitter } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  matcher = new MyErrorStateMatcher();

  email = new FormControl('admin@gudpost.net', [
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('admin123', [
    Validators.required,
    Validators.minLength(5),
  ]);

  check = new FormControl(false);

  @Output() loginSignal = new EventEmitter();
  @Output() loginSignalGJ = new EventEmitter();
  @Output() logoutSignal = new EventEmitter();

  constructor() { }

  loginWithFb() {
    this.loginSignal.emit('');
  }

  loginWithGJ() {
    const user = {
      email: this.email.value,
      password: this.password.value,
      rememberMe: this.check.value
    };
    this.loginSignalGJ.emit(user);
  }

  logoutWithFb() {
    this.logoutSignal.emit();
  }

}
