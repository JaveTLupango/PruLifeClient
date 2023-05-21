import { Component } from '@angular/core';
import { PersonalInfo } from '../Model/policy/personal-info.model';
import { ClientAddress } from '../Model/policy/client-address.model';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClientPreviewInfoService } from '../shared/services/policy/client-preview-info.service';
import { IfStmt } from '@angular/compiler';
import { PreviewClientDataModel } from '../Model/login.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientdatapreview',
  templateUrl: './clientdatapreview.component.html',
  styleUrls: ['./clientdatapreview.component.css']
})
export class ClientdatapreviewComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  Req_id: number = 0;
  personalmodel : PersonalInfo = new PersonalInfo();
  clientPermanentAddressModel : ClientAddress = new ClientAddress();
  clientAddressModel : ClientAddress = new ClientAddress();
  motherDetailsModel: ClientParentInfo = new ClientParentInfo();
  fatherDetailsModel: ClientParentInfo = new ClientParentInfo();
  listOfSiblings: ClientParentInfo[] = [];
  service:ClientPreviewInfoService = new  ClientPreviewInfoService(this.http);
  CSCount : number = 0;
  content1: boolean = false;
  content2: boolean = false;
  content3: boolean = false;
  content4: boolean = false;

  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    // this.motherDetailsModel.request_id = this.Req_id;
    // this.fatherDetailsModel.request_id = this.Req_id;
    console.log(this.Req_id);
     this.service.get(this.Req_id).subscribe(
      data=>
      {
        console.log(data);
        if(data.StatusCode == 200)
        {
          this.motherDetailsModel = data.dataMother[0];
          this.fatherDetailsModel = data.dataFather[0];
          this.personalmodel = data.dataPI[0];
          this.clientAddressModel = data.dataCA[0];
          if(data.dataCountCA > 1)
          {
            this.clientPermanentAddressModel = data.dataCA[1];
          }
          this.listOfSiblings = data.dataCS;
          this.CSCount = data.dataCountCS;
        }
      }
    );
  }

  btn01()
  {
    console.log(this.content1);
    if(this.content1)
    {
      this.content1 = false;
    }
    else{
      this.content1 = true;
    }
  }

  btn02()
  {
    if(this.content2)
    {
      this.content2 = false;
    }
    else{
      this.content2 = true;
    }
  }

  btn03()
  {
    if(this.content3)
    {
      this.content3 = false;
    }
    else{
      this.content3 = true;
    }
  }

  btn04()
  {
    //content4
    if(this.content4)
    {
      this.content4 = false;
    }
    else{
      this.content4 = true;
    }
  }

  btn05(model: any)
  {
    console.log(model.id);
    console.log(model.status);
    model.status = model.status == undefined? false : model.status? true: false;    
    console.log(model.status);

    this.listOfSiblings?.map((todo, i)=>
    {
      if(todo.id == model.id)
      {
        this.listOfSiblings[i].status = !model.status;
      }
    })
    
  }

  btnsubmit()
  {
      this.service.submit(this.Req_id).subscribe(
        data =>
        {
          if(data.StatusCode == 200)
          {
            Swal.fire(
              data.message,
              'Your Info is already submitted to your agent!',
              'success'
            );
            this.router.navigate(['']);
          }
          else{
            Swal.fire(
              "Something went wrong!",
              'Warning!',
              'warning'
            );
          }
        }
      );
  }

  previous()
  {
    this.router.navigate(['/policy-list-siblings/'+ this.Req_id]);
  }
}
