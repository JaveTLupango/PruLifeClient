import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LogoutService } from './shared/services/auth/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prulifeclientweb';
  isLogin : boolean = false;
  isHeaderShow  : boolean = false;
  isNavShow : boolean = false;

  constructor(private router: Router, private http: HttpClient)
  {
      router.events.subscribe((val)=>
      {
        if(val instanceof NavigationEnd)
        {
          if(val.url == '/login')
          {
            this.isHeaderShow = false
            this.isNavShow = true;
          }
          else if(val.url.includes('policy'))
          {

            this.isHeaderShow = true;
            this.isNavShow = false;
          }
          else
          {
            //console.log(localStorage.getItem('AuthToken'));
            if(localStorage.getItem('AuthToken') != null)
            {
              this.isLogin = true;
            }
            else{
              this.isLogin = false;
            }
            this.isHeaderShow = true
            this.isNavShow = true;
          }
        }
      });
  }


  logout_service : LogoutService = new LogoutService(this.http, this.router);

  logout()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "Logging Out is deleting all session!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logging Out!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.logout_service.logout();
        this.router.navigate(['']);
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
    })
  }

}
