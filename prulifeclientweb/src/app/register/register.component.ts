import { Component } from '@angular/core';
import { Login } from '../Model/login.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/auth/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient,private router: Router)
  {

  }
  isRegistered : boolean = false;
  warningNotif : string = '';
  isNotif : boolean = false;
  formValueReg : Login = new Login;
  email: string = '';
  password: string = '';
  name : string = '';
  confirm_password : string = '';
  login_services : LoginService = new LoginService(this.http, this.router);
  onSubmit() {
    this.formValueReg.password = this.password;
    this.formValueReg.email = this.email;
    this.formValueReg.name = this.name;
    this.formValueReg.confirm_password = this.confirm_password;
    if(this.password == this.confirm_password)
    {
      debugger;
      this.login_services.register(this.formValueReg).subscribe(
        data=>
        {
          if(data.StatusCode == 200)
          {
            Swal.fire(
              'Register Successfully!',
              data.message,
              'success'
            );          
            this.isRegistered = true;
          }
          else{
            Swal.fire(
              'Login Failed!',
              data.message,
              'warning'
            );          
            this.isRegistered = false;
          }
        },
        (error: HttpErrorResponse) => {
          Swal.fire(
            'Login Failed!',
            error.message,
            'warning'
          );          
          this.isRegistered = false;
        });
    }
    else
    {
      this.isNotif = true;
      this.warningNotif = "Password is not match!";
    }
  }
}
