import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';
import { ClientSiblingsService } from '../shared/services/policy/client-siblings.service';

@Component({
  selector: 'app-listof-siblings',
  templateUrl: './listof-siblings.component.html',
  styleUrls: ['./listof-siblings.component.css']
})
export class ListofSiblingsComponent {

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
  Req_id: number = 0;
  rowCount : number = 0;
  listOfSiblings: ClientParentInfo[] | undefined;
  services: ClientSiblingsService = new ClientSiblingsService(this.http);

  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    this.services.validate(this.Req_id).subscribe(
      data=>
      {
        console.log(data);
        this.listOfSiblings = data.data;
      }
    );
  }

}
