import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleLogin(loginForm): void {
    const { email, password } = loginForm.value;
    this.authService.login(email, password).subscribe(
      (res) => {
        if (res) {
          this.authService.setLoggedIn();
          this.router.navigate(['customers']);
        }
      },
      (err) => console.log(err)
    );
  }
}
