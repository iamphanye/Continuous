// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {}

  async getUsers() {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map(doc => doc.data());
  }
}
