import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { FirebaseService } from './services/firebase.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent],  // Asegúrate de que se incluya UserListComponent correctamente
  template: `
    <h1>Welcome!</h1>
    <router-outlet></router-outlet>
    <app-user-list></app-user-list>
  `,
  styleUrls: ['./app.component.css']  // Asegúrate de usar styleUrls (no styleUrl)
})
export class AppComponent {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Llamar al servicio para obtener los datos de Firestore
    this.firebaseService.getDataFromFirestore();
  }
}
