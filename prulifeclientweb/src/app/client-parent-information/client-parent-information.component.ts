import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';
import { ClientParentInfoService } from '../shared/services/policy/client-parent-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-parent-information',
  templateUrl: './client-parent-information.component.html',
  styleUrls: ['./client-parent-information.component.css']
})
export class ClientParentInformationComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  Req_id: number = 0;
  motherDetailsModel: ClientParentInfo = new ClientParentInfo();
  fatherDetailsModel: ClientParentInfo = new ClientParentInfo();
  service : ClientParentInfoService = new ClientParentInfoService(this.http);
  dataCountM: number = 0;
  dataCountF: number = 0;
  mValidAction : boolean = false;
  fValidAction : boolean = false;


  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    // this.motherDetailsModel.request_id = this.Req_id;
    // this.fatherDetailsModel.request_id = this.Req_id;
    console.log(this.Req_id);
    this.service.validate(this.Req_id).subscribe(
      data=>
      { debugger;
        console.log(data);
        if(data.dataCountM > 0)
        {
          this.motherDetailsModel = data.dataMother[0];
          this.motherDetailsModel.is_not_death = this.motherDetailsModel.is_not_death == false ? false : true;
          this.motherDetailsModel.is_not_illness = this.motherDetailsModel.is_not_illness == false ? false : true;
          this.dataCountM = data.dataCountM;
        }

        if(data.dataCountF > 0)
        {
          this.dataCountF = data.dataCountF;
          this.fatherDetailsModel = data.dataFather[0];

          this.fatherDetailsModel.is_not_death = this.fatherDetailsModel.is_not_death == false ? false : true;
          this.fatherDetailsModel.is_not_illness = this.fatherDetailsModel.is_not_illness == false ? false : true;
        }
      }
    );
  }

  onsubmit()
  {

    debugger;
    this.mValidAction = false;
    this.fValidAction = false;

    if(this.dataCountM == 0)
    {
      this.motherDetailsModel.request_id = this.Req_id
      this.motherDetailsModel.string_type = "Mother"
      console.log(this.motherDetailsModel);

      if(!this.motherDetailsModel.is_not_death)
      {
        this.motherDetailsModel.cause_of_death = "N/A";
      }


      if(!this.motherDetailsModel.is_not_illness)
      {
        this.motherDetailsModel.illness = "N/A";
        this.motherDetailsModel.age_diagnosis = 0;
      }

      this.service.create(this.motherDetailsModel).subscribe(
        data =>
        {
          console.log(data);
          if(data.StatusCode == 200)
          {
            this.motherDetailsModel = data.data[0];
            console.log(this.motherDetailsModel);
            this.mValidAction = true;
          }
          else
          {
            this.mValidAction = false;
          }
        },
        error =>
        {
          this.mValidAction = false;
          console.log('oops', error)
        }
      );
    }
    else
    {
        this.service.update(this.motherDetailsModel).subscribe(
          data =>
          {
            if(data.StatusCode == 200)
            {
              console.log(data);
              this.mValidAction = true;
            }
            else
            {
              console.log(data);
              this.mValidAction = false;
            }
          },
          error =>
          {
            this.mValidAction = false;
            console.log('oops', error)
          }
        );
    }

    if(this.dataCountF == 0)
    {

      this.fatherDetailsModel.request_id = this.Req_id
      this.fatherDetailsModel.string_type = "Father"
      this.fatherDetailsModel.type = 1;
      console.log(this.fatherDetailsModel);

      if(!this.fatherDetailsModel.is_not_death)
      {
        this.fatherDetailsModel.cause_of_death = "N/A";
      }

      if(!this.fatherDetailsModel.is_not_illness)
      {
        this.fatherDetailsModel.illness = "N/A";
        this.fatherDetailsModel.age_diagnosis = 0;
      }

      this.service.create(this.fatherDetailsModel).subscribe(
        data =>
        {
          console.log(data);
          if(data.StatusCode == 200)
          {
            this.fatherDetailsModel = data.data[0];
            console.log(this.fatherDetailsModel);
            this.fValidAction = true;
          }
          else
          {
            this.fValidAction = false;
          }
            this.function_Next(this.fValidAction, this.mValidAction);
        },
        error =>
        {
          this.fValidAction = false;
          console.log('oops', error);
          this.function_Next(this.fValidAction, this.mValidAction);
        }
      );
    }
    else
    {
      this.service.update(this.fatherDetailsModel).subscribe(
        data =>
        {
          if(data.StatusCode == 200)
          {
            console.log(data);
            this.fValidAction = true;
          }
          else
          {
            console.log(data);
            this.fValidAction = false;
          }
            this.function_Next(this.fValidAction, this.mValidAction);
        },
        error =>
        {
          this.fValidAction = false;
          console.log('oops', error);
          this.function_Next(this.fValidAction, this.mValidAction);
        }
      );
    }
  }

  function_Next(fval:boolean, mval : boolean)
  {
    if(fval && mval)
    {
          Swal.fire({
            title: 'Successfully Saved!',
            text: "Parent information in successfully saved!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Next'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/policy-list-siblings/'+ this.Req_id]);
            }
          })
    }
    else if(!mval)
    {
      Swal.fire({
        title: 'Unsuccessfully Saved!',
        text: "Mother information in unsuccessfully saved!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Reload'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/policy-client-parent-info/'+ this.Req_id]);
        }
      })
    }
    else if(!fval)
    {
      Swal.fire({
        title: 'Unsuccessfully Saved!',
        text: "Father information in unsuccessfully saved!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Reload'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/policy-client-parent-info/'+ this.Req_id]);
        }
      })
    }
  }
}
