import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';
import { ClientParentInfoService } from '../shared/services/policy/client-parent-info.service';

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


  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    // this.motherDetailsModel.request_id = this.Req_id;
    // this.fatherDetailsModel.request_id = this.Req_id;
    console.log(this.Req_id);
    this.service.validate(this.Req_id).subscribe(
      data=>
      {
        console.log(data);
        if(data.dataCountM > 0)
        {
          this.motherDetailsModel = data.dataMother[0];
          this.dataCountM = data.dataCountM;
        }

        if(data.dataCountF > 0)
        {
          this.dataCountF = data.dataCountF;
          this.fatherDetailsModel = data.dataFather[0];
        }
      }
    );
  }

  onsubmit()
  {
    if(this.dataCountM == 0)
    {
      this.motherDetailsModel.request_id = this.Req_id
      this.motherDetailsModel.string_type = "Mother"
      console.log(this.motherDetailsModel);
      this.service.create(this.motherDetailsModel).subscribe(
        data =>
        {
          console.log(data);
          this.motherDetailsModel = data.data[0];
          console.log(this.motherDetailsModel);
        }
      );
    }


    if(this.dataCountF == 0)
    {

      this.fatherDetailsModel.request_id = this.Req_id
      this.fatherDetailsModel.string_type = "Father"
      this.fatherDetailsModel.type = 1;
      console.log(this.fatherDetailsModel);
      this.service.create(this.fatherDetailsModel).subscribe(
        data =>
        {
          console.log(data);
          this.fatherDetailsModel = data.data[0];
          console.log(this.fatherDetailsModel);
        }
      );
    }

    this.router.navigate(['/policy-list-siblings/'+ this.Req_id]);
  }
}
