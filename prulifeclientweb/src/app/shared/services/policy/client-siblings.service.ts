import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Baseurl } from '../../baseurl/baseurl.model';
import { RequestModel } from 'src/app/Model/policy/request-model.model';
import { ClientParentInfo } from 'src/app/Model/policy/client-parent-info.model';

@Injectable({
  providedIn: 'root'
})
export class ClientSiblingsService {

  constructor(private http: HttpClient) { }
  baseurl : Baseurl = new Baseurl();
  reqModel : RequestModel = new RequestModel();

  validate(Req_id: number)
  {
    const apiURL = this.baseurl.url_api+"/policy-client-sibling-list";
    const model = this.reqModel;
    model.id = Req_id;
    return this.http.post<any>(apiURL, model);
  }

  create(modelSiblings: ClientParentInfo)
  {
    const apiURL = this.baseurl.url_api+"/create-client-sibling-info";
    return this.http.post<any>(apiURL, modelSiblings);
  }

  getInfo(id: number)
  {
    const apiURL = this.baseurl.url_api+"/policy-client-sibling-info";
    const model = this.reqModel;
    model.id = id;
    return this.http.post<any>(apiURL, model);
  }

  update(model: ClientParentInfo)
  {
    const apiURL = this.baseurl.url_api+"/update-client-sibling-info";
    return this.http.put<any>(apiURL, model);
  }

  delete(id: number, reqid: number)
  {
    const apiURL = this.baseurl.url_api+"/delete-client-sibling-info";
    const model = this.reqModel;
    model.id = id;
    model.reqid = reqid;
    return this.http.post<any>(apiURL, model);
  }

}

