import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { AlertType } from '../enums/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public email: string = 'admin@admin.com';
  public password: string = 'password';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  handleLogin(loginForm): void {
    const { email, password } = loginForm.value;
    this.authService.login(email, password).subscribe(
      (success) => {
        if (success) {
          this.authService.setLoggedIn();
          this.router.navigate(['customers']);
        }
      },
      (err) => {
        this.alertService.showAlertDialog({
          title: 'Login failed.',
          message: 'Please enter valid email and password',
          type: AlertType.DANGER,
        });
      }
    );
  }
}
