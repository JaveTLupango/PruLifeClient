import { Component } from '@angular/core';
import { ClientAddress } from '../Model/policy/client-address.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-address',
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.css']
})
export class ClientAddressComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  is_permanent : boolean = false;
  clientAddressModel : ClientAddress = new ClientAddress();
  Req_id: number = 0;

  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    
  }
}
