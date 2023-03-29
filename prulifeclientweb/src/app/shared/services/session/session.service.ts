import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private isLoggedIn: boolean = false;
  constructor() { }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  get IsLoggedIn() {
    return this.isLoggedIn;
  }
}
