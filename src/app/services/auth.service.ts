import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  isLoggedIn() {
    return !!localStorage.getItem('isLoggedIn');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}
