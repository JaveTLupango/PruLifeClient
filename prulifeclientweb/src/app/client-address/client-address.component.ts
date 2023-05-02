import { Component } from '@angular/core';
import { ClientAddress } from '../Model/policy/client-address.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClientAddressService } from '../shared/services/policy/client-address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-address',
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.css']
})
export class ClientAddressComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  is_permanent : boolean = false;
  clientAddressModel : ClientAddress = new ClientAddress();
  clientPermanentAddressModel : ClientAddress = new ClientAddress();
  clientAddressServices : ClientAddressService = new ClientAddressService(this.http);
  Req_id: number = 0;
  rowCount : number = 0;

  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    this.clientAddressServices.validateClientAddress(this.Req_id).subscribe(
      data=>
      {
        console.log(data);
        if(data.StatusCode == 200)
        {
          this.rowCount = data.dataCount;
          if(data.dataCount ==1 )
          {
            this.clientAddressModel = data.data[0];
          }          
        }
        else
        {

        }
      }
    );
  }

  onsubmit()
  {
    this.clientAddressModel.request_id = this.Req_id;
    console.log(this.clientAddressModel);
    this.clientAddressServices.InsertClientAddress(this.clientAddressModel).subscribe(
      data=>
      {
        if(data.StatusCode == 200)
        {
          Swal.fire(
            'Successfully Saved!',
            data.message,
            'success'
          )
        }
        else
        {
          console.log(data);
          Swal.fire(
            'Something Wrong!',
            data.message + ' ' +data.errors ,
            'error'
          )
        }
      }
    );
  }
}
