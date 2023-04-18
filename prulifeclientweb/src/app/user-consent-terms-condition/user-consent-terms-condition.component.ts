import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-consent-terms-condition',
  templateUrl: './user-consent-terms-condition.component.html',
  styleUrls: ['./user-consent-terms-condition.component.css']
})
export class UserConsentTermsConditionComponent {

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  Req_id: number = 0;
  isDisabled: boolean = false;

  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    
  }
}
