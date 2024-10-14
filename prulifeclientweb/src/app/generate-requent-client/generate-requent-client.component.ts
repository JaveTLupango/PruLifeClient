import { PI_Error } from './../Model/policy/personal-info.model';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestURLService } from '../shared/services/RequestURL/request-url.service';
import { RequestURL } from '../Model/RequestURL/request-url.model';
import Swal from 'sweetalert2';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-generate-requent-client',
  templateUrl: './generate-requent-client.component.html',
  styleUrls: ['./generate-requent-client.component.css']
})
export class GenerateRequentClientComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  appC : AppComponent = new AppComponent(this.router, this.http);
  request_url : RequestURLService = new RequestURLService(this.http,this.router);
  public visible = false;
  requestURL : any;
  requestURLList :RequestURL[] | undefined;
  isLoading : boolean = false;
  ubstring : any = localStorage.getItem('UsersInfo');
  userDetails : any;

  ngOnInit(){
    console.log(this.ubstring);
    this.userDetails = JSON.parse(this.ubstring);
    console.log( this.userDetails);
      this.visible = this.appC.isLogin;
      this.request_url.getListOfRequestURL(this.userDetails.id).subscribe(
        data=>
        {
          this.requestURL = data;
          this.requestURLList = this.requestURL.data;
        }
        );
    }
  btnViewDetails(id:any)
  {
    this.router.navigate(['/policy-client-data-preview/'+ id]);
  }

  btnReSendEmail(id:any)
  {
    this.isLoading = true;
    this.request_url.resendRequestURL(id).subscribe(
      data=>
      {
        if(data.StatusCode == 200)
        {
           Swal.fire(
            'Success!',
            'Sending Request is successfully delivered!.',
            'success'
          );
          this.requestURLList = data.dataNew;
        }
        else{
          Swal.fire(
            'Error!',
            'Something went wrong during performing the task!.',
            'error'
          )
          console.log(data);
        }
        this.isLoading = false;
      }
    );
  }

  btnDeleteReqURL(id:any)
  {
    this.isLoading = true;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        this.DeleteReqURL(id);
      }
    })
  }

  DeleteReqURL(id:any)
  {
    this.request_url.deleteRequestURL(id).subscribe(
      data=>
      {
        if(data.StatusCode == 200)
        {
           Swal.fire(
            'Deleted!',
            'Request URL is successfully deleted!.',
            'success'
          )
          //this.router.navigate(['/policy-client-data-preview/'+ id]);
          this.requestURLList = data.dataNew;
        }
        else{
          Swal.fire(
            'Error!',
            'Something went wrong during performing the task!.',
            'error'
          )
          console.log(data);
        }
        this.isLoading = false;
      }
    );
  }
}
