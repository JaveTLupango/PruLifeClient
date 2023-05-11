import { Component } from '@angular/core';
import { PersonalInfo } from '../Model/policy/personal-info.model';
import { ClientAddress } from '../Model/policy/client-address.model';
import { ClientParentInfo } from '../Model/policy/client-parent-info.model';


@Component({
  selector: 'app-clientdatapreview',
  templateUrl: './clientdatapreview.component.html',
  styleUrls: ['./clientdatapreview.component.css']
})
export class ClientdatapreviewComponent {  
  personalmodel : PersonalInfo = new PersonalInfo();
  clientPermanentAddressModel : ClientAddress = new ClientAddress();
  clientAddressModel : ClientAddress = new ClientAddress();
  motherDetailsModel: ClientParentInfo = new ClientParentInfo();
  fatherDetailsModel: ClientParentInfo = new ClientParentInfo();
  
  content1: boolean = false;
  content2: boolean = false;
  content3: boolean = false;

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

}
