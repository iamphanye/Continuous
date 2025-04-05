import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
    <app-user-list></app-user-list>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deployment';
}
