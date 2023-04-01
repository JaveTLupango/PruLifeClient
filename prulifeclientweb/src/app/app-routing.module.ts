import { ClientParentInformationComponent } from './client-parent-information/client-parent-information.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { ClientPersonalInfoComponent } from './client-personal-info/client-personal-info.component';
import { UserConsentTermsConditionComponent } from './user-consent-terms-condition/user-consent-terms-condition.component';
import { CreateGenReqClientComponent } from './create-gen-req-client/create-gen-req-client.component';
import { GenerateRequentClientComponent } from './generate-requent-client/generate-requent-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'generaterequesturl', component:GenerateRequentClientComponent},
  {path:'creategenrequrl', component:CreateGenReqClientComponent},
  {path:'UserTerms', component:UserConsentTermsConditionComponent},
  {path:'client-personal-info', component:ClientPersonalInfoComponent},
  {path:'client-address', component:ClientAddressComponent},
  {path:'client-parent-info', component:ClientParentInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
