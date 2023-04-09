import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Login } from '../Model/login.model';
import { LoginService } from '../shared/services/auth/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
constructor(private http: HttpClient,private router: Router)
{

}

  formValueLogin : Login = new Login;
  email: string = '';
  password: string = '';
  login_services : LoginService = new LoginService(this.http, this.router);

  onSubmit() {
    console.log('Login clicked');
    console.log('Username:', this.email);
    console.log('Password:', this.password);
    this.formValueLogin.password = this.password;
    this.formValueLogin.email = this.email;
    this.login_services.login(this.formValueLogin);
  }
}
