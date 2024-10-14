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
      this.modelSiblings.illness = !this.modelSiblings.is_not_illness ? "None" : this.modelSiblings.illness;
      this.modelSiblings.age_diagnosis = !this.modelSiblings.is_not_illness ? 100 : this.modelSiblings.age_diagnosis;
      this.modelSiblings.cause_of_death = this.modelSiblings.is_not_death ? "None" : this.modelSiblings.cause_of_death;
      this.services.create(this.modelSiblings).subscribe(
        data=>
        {
          console.log(JSON.stringify(data));
          if(data.StatusCode == 200)
          {
              Swal.fire(
                'Successfuly Created!',
                'Success!',
                'success'
              );            
            this.router.navigate(['/policy-list-of-siblings/'+ this.Req_id]);
          }
          else
          {
            var bodytext = "";

            // data.console.errors
            // .forEach(() e => {
            //   bodytext += "<br>"+e[0];
            // });
            this.fun_warning("Error",
                data.message
            );
          }       
        },
        error =>
        {
          debugger;
          console.log('oops',JSON.parse(error));   

          this.fun_warning("Error",
                error.message
            );
        }
      );
  }

  fun_warning(msm:string, hsms:string)
  {
    debugger;
    Swal.fire({
      title: hsms,
      text: msm,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reload'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/policy-add-siblings/'+ this.Req_id]);
      }
    });
  }
}
