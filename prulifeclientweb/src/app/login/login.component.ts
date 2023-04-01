import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Login } from '../Model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formValueLogin : Login = new Login;
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
