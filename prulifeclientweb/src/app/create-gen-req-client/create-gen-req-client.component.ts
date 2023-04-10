import { Component } from '@angular/core';

@Component({
  selector: 'app-create-gen-req-client',
  templateUrl: './create-gen-req-client.component.html',
  styleUrls: ['./create-gen-req-client.component.css']
})
export class CreateGenReqClientComponent {

  email: string = '';
  alias: string = '';

  onSubmit()
  {
    console.log(this.email);
    console.log(this.alias);
  }
}
