import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequestURLService } from '../shared/services/RequestURL/request-url.service';
import { RequestURL } from '../Model/RequestURL/request-url.model';

@Component({
  selector: 'app-generate-requent-client',
  templateUrl: './generate-requent-client.component.html',
  styleUrls: ['./generate-requent-client.component.css']
})
export class GenerateRequentClientComponent {
  constructor(private router: Router, private http: HttpClient){}
  appC : AppComponent = new AppComponent(this.router, this.http);
  request_url : RequestURLService = new RequestURLService(this.http,this.router);
  public visible = false;
  requestURL : any;
  requestURLList :RequestURL[] | undefined;

  ngOnInit(){
      this.visible = this.appC.isLogin;

      this.request_url.getListOfRequestURL().subscribe(
        data=>
        {
          this.requestURL = data;
          this.requestURLList = this.requestURL.data;          
        }
        // ,
        // (error: HttpErrorResponse) => {
        //   console.log(error);
        // }
        );
    }
}
