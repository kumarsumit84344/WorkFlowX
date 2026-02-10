import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './core/auth/auth.guard';

@Component({
  selector: 'app-root',
  template: `
    <h1>Firebase Auth Test</h1>

    @if (isBrowser) {
      <button (click)="register()">Register</button>
      <button (click)="login()">Login</button>
    }
  `
})
export class App {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  
  constructor(private auth: AuthService) {}

  register() {
    this.auth.register('test@test.com', '123456')
      .then(res => console.log('Registered:', res))
      .catch(err => console.error(err));
  }

  login() {
    this.auth.login('test@test.com', '123456')
      .then(res => console.log('Logged in:', res))
      .catch(err => console.error(err));
  }
}
