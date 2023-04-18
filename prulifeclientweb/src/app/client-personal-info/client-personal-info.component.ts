import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalInfoService } from '../shared/services/policy/personal-info.service';
import { PersonalInfo } from '../Model/policy/personal-info.model';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-client-personal-info',
  templateUrl: './client-personal-info.component.html',
  styleUrls: ['./client-personal-info.component.css']
})
export class ClientPersonalInfoComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
    Req_id: number = 0;
    rowCount : number = 0;
    isDisabled: boolean = false;
    fname : string = '';
    lname : string = '';
    mname : string = '';
    bday : Date = new Date;
    contact_no : string = '';
    email : string = '';
    gender : number = 0; 

  personalmodel : PersonalInfo = new PersonalInfo();
  personalInfo: PersonalInfoService = new PersonalInfoService(this.http);
  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    console.log(this.Req_id);
    this.personalInfo.validatePersonalInfo(this.Req_id).subscribe(
      data =>
      {
        console.log(data);
        if(data.dataCount > 0)
        {

        }
      }
    );
  }

  onsubmit()
  {
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.mname);
    console.log(this.bday);
    console.log(this.contact_no);
    console.log(this.email);
    console.log(this.gender);
  }
}
