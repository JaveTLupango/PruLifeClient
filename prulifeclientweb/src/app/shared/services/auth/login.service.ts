import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/Model/login.model';
import { Baseurl } from '../../baseurl/baseurl.model';
import Swal from 'sweetalert2';
import { NavigationEnd, Router } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl : Baseurl = new Baseurl();
  constructor(private http: HttpClient, private router: Router)
  {

  }

  login(formValueLogin : Login)
  {
    // console.log(formValueLogin.email);
    // console.log(this.baseurl.url_api+'/auth/login');
    this.http.post<any>(this.baseurl.url_api+'/auth/login', formValueLogin,
    ).subscribe(
      data=>
      {
        if(data.StatusCode == 200)
        {
           console.log(data.token);
           console.log(data.data);
          localStorage.setItem('AuthToken', data.token);
          localStorage.setItem('UsersInfo', data.data);
          Swal.fire(
            'Login Successfully!',
            data.message,
            'success'
          )
          this.router.navigate(['']);
        }
        else{
          Swal.fire(
            'Login Failed!',
            data.message,
            'warning'
          )
        }
      },
      (error: HttpErrorResponse) => {
        Swal.fire(
          'Login Failed!',
          error.message,
          'warning'
        )
      });
  }

  register(formValueLogin : Login)
  {
    return this.http.post<any>(this.baseurl.url_api+'/auth/register', formValueLogin,
    );
  }
}
