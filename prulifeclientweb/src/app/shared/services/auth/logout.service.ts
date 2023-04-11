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
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem('AuthToken'));
    myHeaders.append("Accept", "application/json");

    fetch(this.baseurl+"/auth/logout", {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);        
        localStorage.clear(); 
          Swal.fire(
                'User Logout!',
                result,
                'success'
              )             
          window.location.reload();
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
  }

}
