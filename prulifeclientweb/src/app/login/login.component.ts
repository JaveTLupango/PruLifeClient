import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Login } from '../Model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formDataLogin: Login = new  Login;

  postLogin(data : NgForm)
    {
      if(this.formDataLogin.username != null)
      {
        //this.addStudent(data);
      }
      else
      {
        //this.updateStudent(data);
      }

    }
}
