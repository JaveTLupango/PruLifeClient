import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Baseurl } from '../../baseurl/baseurl.model';
import Swal from 'sweetalert2';
import { CreateRequestURL } from 'src/app/Model/RequestURL/request-url.model';
import { RequestModel } from 'src/app/Model/policy/request-model.model';

@Injectable({
  providedIn: 'root'
})
export class RequestURLService {

  constructor(private http: HttpClient, private router: Router) { }
  baseurl : Baseurl = new Baseurl();  
  reqModel : RequestModel = new RequestModel();

  getListOfRequestURL(id: number)
  {
    const headers = new HttpHeaders()
            .set("Authorization", "Bearer "+localStorage.getItem('AuthToken'));
    const apiURL = this.baseurl.url_api+"/request-url/list?id="+id;
    return this.http.get(apiURL, {headers});
  }

  postCreateRequestURL(createRURL: CreateRequestURL)
  {
    const headers = new HttpHeaders()
            .set("Authorization", "Bearer "+localStorage.getItem('AuthToken'));
    const apiURL = this.baseurl.url_api+"/request-url/create";
        return this.http.post<any>(apiURL,createRURL,{headers});
  }

  deleteRequestURL(id: number)
  { 
    const headers = new HttpHeaders()
              .set("Authorization", "Bearer "+localStorage.getItem('AuthToken'));
    const apiURL = this.baseurl.url_api+"/request-url/delete";
    const model = this.reqModel;
    model.id = id;
    return this.http.post<any>(apiURL, model, {headers});
  }

  resendRequestURL(id: number)
  {
    const headers = new HttpHeaders()
    .set("Authorization", "Bearer "+localStorage.getItem('AuthToken'));
    const apiURL = this.baseurl.url_api+"/request-url/resend";
    const model = this.reqModel;
    model.id = id;
    return this.http.post<any>(apiURL, model, {headers});
  }

}
