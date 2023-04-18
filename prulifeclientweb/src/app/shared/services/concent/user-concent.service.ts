import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Baseurl } from '../../baseurl/baseurl.model';
import { RequestModel } from 'src/app/Model/policy/request-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserConcentService {

  constructor(private http: HttpClient) { }
  baseurl : Baseurl = new Baseurl();
  requestModel: RequestModel = new RequestModel();

  validateConcent(requestId : number)
  {
    ///policy-information-terms
      this.requestModel.id = requestId;
      return this.http.post<any>(this.baseurl.url_api+'/policy-information-terms',this.requestModel);
  }
  // validateConcent(requestId : number)
  // {
  //   ///policy-information-terms
  //     this.requestModel.id = requestId;
  //     return this.http.post<any>(this.baseurl.url_api+'/policy-client-personal-info',this.requestModel);
  // }
}
