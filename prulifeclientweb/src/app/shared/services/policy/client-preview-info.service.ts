import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestModel } from 'src/app/Model/policy/request-model.model';
import { Baseurl } from '../../baseurl/baseurl.model';

@Injectable({
  providedIn: 'root'
})
export class ClientPreviewInfoService {

  constructor(private http: HttpClient) { }
  baseurl : Baseurl = new Baseurl();
  reqModel : RequestModel = new RequestModel();

  get(Req_id: number)
  {
    const apiURL = this.baseurl.url_api+"/policy-client-data-preview";
    const model = this.reqModel;
    model.id = Req_id;
    return this.http.post<any>(apiURL, model);
  }

  submit(Req_id: number)
  {
    const apiURL = this.baseurl.url_api+"/request-url/submitted";
    const model = this.reqModel;
    model.id = Req_id;
    return this.http.post<any>(apiURL, model);
  }

}
