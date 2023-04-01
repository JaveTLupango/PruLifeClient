import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string = '';
  private password: string = '';

  constructor() { }

  login(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getAuthorizationHeader() {
    if (this.username && this.password) {
      return new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
      });
    } else {
      return null;
    }
  }

  logout() {
    this.username = '';
    this.password = '';
  }
}
