import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Baseurl } from '../../baseurl/baseurl.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  baseurl : Baseurl = new Baseurl();
  constructor(private http: HttpClient,private router: Router) { }

  logout()
  {
    // let headers = new Headers();
    // //headers.append('Accept','application/json');
    // headers.append('Authorization', 'Bearer '+localStorage.getItem('AuthToken'));
    // console.log('Bearer '+localStorage.getItem('AuthToken'));
    // this.http.post<any>(this.baseurl.url_api+'/auth/logout', { headers: headers } ).subscribe(
    //   data =>
    //   {
    //     if(data.StatusCode == 200)
    //     {
    //       Swal.fire(
    //         'Login Failed!',
    //         data.message,
    //         'success'
    //       )
    //       localStorage.clear();          
    //     }
    //   },
    //   (error: HttpErrorResponse) => {
    //     Swal.fire(
    //       'Login Failed!',
    //       error.message,
    //       'warning'
    //     )
    //   }
    // );
    console.log('Bearer '+localStorage.getItem('AuthToken'));
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('AuthToken'));
    myHeaders.append("Accept", "application/json");


    fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
          Swal.fire(
                'User Logout!',
                result,
                'success'
              )
              localStorage.clear(); 
      }  
      )
      .catch(error => {
        console.log('error', error);
        Swal.fire(
                'Login Failed!',
                error.message,
                'warning'
              )
      });  
      this.router.navigate(['']);
  }

}
