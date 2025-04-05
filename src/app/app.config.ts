import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"continuous-9e3f2","appId":"1:134228745713:web:e9a5ce46a6fd2c5a02b850","storageBucket":"continuous-9e3f2.firebasestorage.app","apiKey":"AIzaSyCbtpAdCj5fOA2JcB453nnaSg02i7ow9eo","authDomain":"continuous-9e3f2.firebaseapp.com","messagingSenderId":"134228745713","measurementId":"G-K4RLKMQLGQ"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
