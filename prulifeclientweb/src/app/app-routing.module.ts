import { ClientParentInformationComponent } from './client-parent-information/client-parent-information.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { ClientPersonalInfoComponent } from './client-personal-info/client-personal-info.component';
import { UserConsentTermsConditionComponent } from './user-consent-terms-condition/user-consent-terms-condition.component';
import { CreateGenReqClientComponent } from './create-gen-req-client/create-gen-req-client.component';
import { GenerateRequentClientComponent } from './generate-requent-client/generate-requent-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { ListofSiblingsComponent } from './listof-siblings/listof-siblings.component';
import { AddSiblingComponent } from './add-sibling/add-sibling.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component:GenerateRequentClientComponent},
  {path: 'login', component:LoginComponent},
  {path: 'generaterequesturl', component:GenerateRequentClientComponent},
  {path:'creategenrequrl', component:CreateGenReqClientComponent},
  {path:'UserTerms', component:UserConsentTermsConditionComponent},
  {path:'policy-information-terms/:id', component:UserConsentTermsConditionComponent},
  {path:'policy-client-personal-info/:id', component:ClientPersonalInfoComponent},
  {path:'policy-client-address/:id', component:ClientAddressComponent},
  {path:'policy-client-parent-info/:id', component:ClientParentInformationComponent},
  {path:'policy-list-of-siblings/:id', component:ListofSiblingsComponent},
  {path:'policy-add-siblings/:id', component:AddSiblingComponent},
  {path:'logout', component:LogoutComponent},
  {path:'testing', component:TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
