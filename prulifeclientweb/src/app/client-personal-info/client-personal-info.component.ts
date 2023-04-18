import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalInfoService } from '../shared/services/policy/personal-info.service';


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
  personalInfo: PersonalInfoService = new PersonalInfoService(this.http);
  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    console.log(this.Req_id);
    this.personalInfo.validatePersonalInfo(this.Req_id).subscribe(
      data =>
      {
        console.log(data);
      }
    );
  }
}
