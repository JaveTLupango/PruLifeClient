import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';
import { ClientSiblingsService } from '../shared/services/policy/client-siblings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-client-siblings-info',
  templateUrl: './update-client-siblings-info.component.html',
  styleUrls: ['./update-client-siblings-info.component.css']
})
export class UpdateClientSiblingsInfoComponent 
{
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute)
  {}
  Req_id: number = 0;
  id: number = 0;
  rowCount : number = 0;
  modelSiblings: ClientParentInfo = new ClientParentInfo();
  services: ClientSiblingsService = new ClientSiblingsService(this.http); 
  
  ngOnInit()
  {    
    this.id = this.route.snapshot.params['id'];
    this.Req_id = this.route.snapshot.params['reqid'];
    this.services.getInfo(this.id).subscribe(
      data =>
      {
        if(data.StatusCode == 200)
        {
          this.rowCount = data.dataCount;
          this.modelSiblings = data.data[0];
        }
      }
    );
  }

  onsubmit()
  {
      this.services.update(this.modelSiblings).subscribe(
        data=>
        {
          if(data.StatusCode == 200)
          {
            Swal.fire(
              'Successfuly Updated!',
              'Success!',
              'success'
            );
            this.router.navigate(['/policy-list-of-siblings/'+ this.Req_id]);
          }
          else
          { Swal.fire(
            'Something went wrong!',
            data.message,
            'error'
          );       
          }
        }
      );
  }
}
