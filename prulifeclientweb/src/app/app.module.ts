import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './shared/services/auth/auth.interceptor';
import { GenerateRequentClientComponent } from './generate-requent-client/generate-requent-client.component';
import { CreateGenReqClientComponent } from './create-gen-req-client/create-gen-req-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenerateRequentClientComponent,
    CreateGenReqClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
