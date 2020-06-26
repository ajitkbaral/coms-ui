import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = environment.baseApiUrl + 'api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.authUrl}`, { email, password });
  }

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
