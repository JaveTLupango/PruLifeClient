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
  IsValid : boolean = true;

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
          if(data.dataCount > 0 )
          {
            this.clientAddressModel = data.data[0];
            if(this.rowCount > 1)
            {  
              console.log(this.clientPermanentAddressModel); 
              this.clientPermanentAddressModel =  data.data[1];     
            }
          }
             
          console.log(this.clientPermanentAddressModel);    
          this.IsValid = true;
        }
        else if(data.StatusCode == -100)
        {
          Swal.fire({
            title: 'Something Wrong!',
            text: data.message,
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.isConfirmed) {              
                this.IsValid = false;
            }
          })
        }
        else
        {
          this.rowCount = 0;          
          this.IsValid = false;
        }
      }
    );
  }

  onsubmit()
  {
      if(this.validation())
      {
          if(this.rowCount == 0)
          { 
            this.clientAddressModel.request_id = this.Req_id;
            this.saveAddress(this.clientAddressModel);
            if(this.clientAddressModel.is_permanent == false)
            {   
              this.clientPermanentAddressModel.request_id = this.Req_id;
                this.clientPermanentAddressModel.is_permanent = true;
                this.saveAddress(this.clientPermanentAddressModel);
            }
          }
          else
          {
            //this.router.navigate(['/policy-client-parent-info/'+ this.Req_id]);
            this.clientAddressModel.request_id = this.Req_id;
            this.UpdateAddress(this.clientAddressModel);
            if(this.clientAddressModel.is_permanent == false)
            {   
                if(this.clientPermanentAddressModel.id == 0)
                {
                  this.clientPermanentAddressModel.request_id = this.Req_id;
                  this.clientPermanentAddressModel.is_permanent = true;
                  this.saveAddress(this.clientPermanentAddressModel);
                }
                else
                {
                  this.clientPermanentAddressModel.request_id = this.Req_id;
                  this.clientPermanentAddressModel.is_permanent = true;
                  this.UpdateAddress(this.clientPermanentAddressModel);
                }
                
            }
          }
      }
  }

  validation()
  {
    if(this.clientAddressModel.house_no == '' || this.clientAddressModel.subd_name == ''
    || this.clientAddressModel.street_name == '' || this.clientAddressModel.barangay== ''
    || this.clientAddressModel.municipality == '' || this.clientAddressModel.city== ''
    || this.clientAddressModel.province == '' || this.clientAddressModel.zipcode == '')
    {
      Swal.fire(
        'Something went wrong!',
        'Please provide your current address information!',
        'warning'
      )
        return false;
    }

    if(this.clientAddressModel.is_permanent == false)
    {
      if(this.clientPermanentAddressModel.house_no == '' || this.clientPermanentAddressModel.subd_name == ''
      || this.clientPermanentAddressModel.street_name == '' || this.clientPermanentAddressModel.barangay== ''
      || this.clientPermanentAddressModel.municipality == '' || this.clientPermanentAddressModel.city== ''
      || this.clientPermanentAddressModel.province == '' || this.clientPermanentAddressModel.zipcode == '')
      {
          
        Swal.fire(
          'Something went wrong!',
          'Please provide your permanent address information!',
          'warning'
        )
          return false;
      }
    }
    
    return true;
  }

  saveAddress(model: ClientAddress)
  {
      this.clientAddressServices.InsertClientAddress(model).subscribe(
        data=>
        {
          console.log(data);
          if(model.is_permanent)
          {
            if(data.StatusCode == 200)
            {
              Swal.fire(
                'Successfully Saved!',
                data.message,
                'success'
              );
              this.router.navigate(['/policy-client-parent-info/'+ this.Req_id]);
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
          
        }
      );
  }

  
  UpdateAddress(model: ClientAddress)
  {
      this.clientAddressServices.UpdateClientAddress(model).subscribe(
        data=>
        {
          console.log(data);
          if(model.is_permanent)
          {
            if(data.StatusCode == 200)
            {
              Swal.fire(
                'Successfully Saved!',
                data.message,
                'success'
              );
              this.router.navigate(['/policy-client-parent-info/'+ this.Req_id]);
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
          
        }
      );
  }
}
