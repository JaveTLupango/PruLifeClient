import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Baseurl } from '../../baseurl/baseurl.model';
import { RequestModel } from 'src/app/Model/policy/request-model.model';
import { ClientAddress } from 'src/app/Model/policy/client-address.model';

@Injectable({
  providedIn: 'root'
})
export class ClientAddressService {
  constructor(private http: HttpClient) { }
  baseurl : Baseurl = new Baseurl();
  reqModel : RequestModel = new RequestModel();

  validateClientAddress(Req_id: number)
  {
    const apiURL = this.baseurl.url_api+"/policy-client-address-info";
    const model = this.reqModel;
    model.id = Req_id;
    return this.http.post<any>(apiURL, model);
  }

  InsertClientAddress(model: ClientAddress)
  {
    const apiURL = this.baseurl.url_api+"/create-client-address-info";
    return this.http.post<any>(apiURL, model);
  }
}
