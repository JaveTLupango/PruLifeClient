import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestURLService } from '../shared/services/RequestURL/request-url.service';
import { User } from '../Model/UserInfo/user.model';
import { CreateRequestURL } from '../Model/RequestURL/request-url.model';
import { ThisReceiver } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-gen-req-client',
  templateUrl: './create-gen-req-client.component.html',
  styleUrls: ['./create-gen-req-client.component.css']
})
export class CreateGenReqClientComponent {
  email: string = '';
  alias: string = '';

  constructor(private router: Router, private http: HttpClient){}
  appC : AppComponent = new AppComponent(this.router, this.http);
  request_url : RequestURLService = new RequestURLService(this.http,this.router);
  userModel : User = new User();
  createRURL: CreateRequestURL = new CreateRequestURL();

  ngOnInit(){
    //
    if(!this.appC.isLogin)
    {
      this.router.navigate(['/login']);
    }
  }
  onSubmit()
  {
    // console.log(this.email);
    // console.log(this.alias);
    let userlogin = localStorage.getItem('UsersInfo');
    console.log(userlogin);
    const val1 = JSON.stringify(userlogin);
    const val2 = JSON.parse(val1);
    this.userModel = JSON.parse(val2);
    console.log(this.userModel);
    console.log(this.userModel.id);
    this.createRURL.receipt_alias = this.alias;
    this.createRURL.receipt_email = this.email;
    this.createRURL.user_id = this.userModel.id;

    this.request_url.postCreateRequestURL(this.createRURL).subscribe(
      data=>
      {
        if(data.StatusCode == 200)
        {
          Swal.fire(
            'Request URL is successfuly Created!',
            data.message,
            'success'
          )
        }
        else{
          Swal.fire(
            'Error!',
            data.message,
            'error'
          )
        }
        this.router.navigate(['generaterequesturl']);
      },
      (error: HttpErrorResponse) => {
        Swal.fire(
          'Error!',
          error.message,
          'error'
        )
      }
    );

  }

}
