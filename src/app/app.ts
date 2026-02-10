import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  // private platformId = inject(PLATFORM_ID);
  // isBrowser = isPlatformBrowser(this.platformId);
}
//  <h1>Firebase Auth Test</h1>

//     @if (isBrowser) {
//       <button (click)="register()">Register</button>
//       <button (click)="login()">Login</button>
//     }