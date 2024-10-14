import { Component } from '@angular/core';
import { Login } from '../Model/login.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/auth/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient,private router: Router)
  {

  }
  formValueLogin : Login = new Login;
  email: string = '';
  password: string = '';
  login_services : LoginService = new LoginService(this.http, this.router);
  onSubmit() {
    // console.log('Login clicked');
    // console.log('Username:', this.email);
    // console.log('Password:', this.password);
    this.formValueLogin.password = this.password;
    this.formValueLogin.email = this.email;
    this.login_services.login(this.formValueLogin);
  }
}
