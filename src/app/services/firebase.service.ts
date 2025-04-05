import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';  // Asegúrate de importar correctamente tu archivo de configuración

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {}

  // Método para obtener los datos de Firestore
  async getDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, 'users'));  // Cambia 'users' por el nombre correcto de tu colección
    const users: any[] = [];  // Declara una variable para almacenar los usuarios
    
    querySnapshot.forEach((doc) => {
      users.push(doc.data());  // Almacena los datos de cada documento en el array
    });

    return users;  // Devuelve el array de usuarios
  }
}
