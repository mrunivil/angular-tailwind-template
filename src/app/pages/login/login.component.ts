import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login() {
    this.authService.loginUserByName(this.userName);
    this.router.navigate(['/events']);
  }
}
