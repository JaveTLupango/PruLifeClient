import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';
import { ClientSiblingsService } from '../shared/services/policy/client-siblings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-sibling',
  templateUrl: './add-sibling.component.html',
  styleUrls: ['./add-sibling.component.css']
})
export class AddSiblingComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  Req_id: number = 0;
  rowCount : number = 0;
  modelSiblings: ClientParentInfo = new ClientParentInfo();
  services: ClientSiblingsService = new ClientSiblingsService(this.http); 
  
  ngOnInit()
  {    
    this.Req_id = this.route.snapshot.params['id'];
  }

  onsubmit()
  {
      console.log(this.modelSiblings);
      this.modelSiblings.request_id = this.Req_id;
      this.services.create(this.modelSiblings).subscribe(
        data=>
        {
          console.log(data);
          if(data.StatusCode == 200)
          {
              Swal.fire(
                'Successfuly Created!',
                'Success!',
                'success'
              );            
            this.router.navigate(['/policy-list-of-siblings/'+ this.Req_id]);
          }
         
        }
      );
  }
}
