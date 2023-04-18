import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Baseurl } from '../../baseurl/baseurl.model';
import { RequestModel } from 'src/app/Model/policy/request-model.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }
  baseurl : Baseurl = new Baseurl();
  reqModel : RequestModel = new RequestModel();

  validatePersonalInfo(Req_id: string)
  {
    const apiURL = this.baseurl.url_api+"/policy-client-personal-info";
    const model = this.reqModel;
    model.id = Req_id;
    return this.http.post(apiURL, model);
  }
}