import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
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
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  color = 'accent';

  checked = false;
  labelPosition = 'after';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  matcher = new MyErrorStateMatcher();

  @Output() loginSignal = new EventEmitter();
  @Output() loginSignalGJ = new EventEmitter();
  @Output() logoutSignal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginWithFb() {
    this.loginSignal.emit();
  }

  loginWithGJ() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.loginSignalGJ.emit(user);
  }

  logoutWithFb() {
    this.logoutSignal.emit();
  }

}
