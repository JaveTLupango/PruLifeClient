import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserConcentService } from '../shared/services/concent/user-concent.service';


@Component({
  selector: 'app-user-consent-terms-condition',
  templateUrl: './user-consent-terms-condition.component.html',
  styleUrls: ['./user-consent-terms-condition.component.css']
})
export class UserConsentTermsConditionComponent {

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  Req_id: number = 0;
  isDisabled: boolean = false;
  concentService : UserConcentService = new  UserConcentService(this.http);
  isValid : boolean = false;

  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    this.concentService.validateConcent(this.Req_id).subscribe(
      data =>
      {
        console.log(data);
        if(data.datacount > 0)
        {
          console.log('true');
          this.isValid = true;
        }
        else{          
          console.log('false');
          this.isValid = false;
        }
      }
    )

  }
}
