import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de usuarios</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{ user.userName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    this.users = await this.firebaseService.getDataFromFirestore();  // Llama al método correcto
  }
}
