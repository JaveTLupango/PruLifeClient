import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConcentService {

  constructor(private http: HttpClient) { }
  baseurl : Baseurl = new Baseurl();

  validateConcent(requestId : string)
  {
    
  }
}
