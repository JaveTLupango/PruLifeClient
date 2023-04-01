import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const headers = this.authService.getAuthorizationHeader();

    if (headers) {
      const authRequest = request.clone({
        headers: headers
      });

      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
