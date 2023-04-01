import { CreateGenReqClientComponent } from './create-gen-req-client/create-gen-req-client.component';
import { GenerateRequentClientComponent } from './generate-requent-client/generate-requent-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'generaterequesturl', component:GenerateRequentClientComponent},
  {path:'creategenrequrl', component:CreateGenReqClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
