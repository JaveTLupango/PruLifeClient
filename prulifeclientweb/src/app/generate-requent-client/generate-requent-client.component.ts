import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-requent-client',
  templateUrl: './generate-requent-client.component.html',
  styleUrls: ['./generate-requent-client.component.css']
})
export class GenerateRequentClientComponent {
  constructor(private router: Router, private http: HttpClient){}
  appC : AppComponent = new AppComponent(this.router, this.http);
  public visible = false;

  ngOnInit(){
      this.visible = this.appC.isLogin
    }

}
