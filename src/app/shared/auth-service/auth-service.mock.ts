import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { resolve } from 'url';


export class AuthServiceMock {

  constructor() { }


  isLoggedIn() {
    return true;
  }

  getCurrentUser() {
   return {
     uid: 'user_id_1'
   };
  }

  loginUser(email: string, password: string): Promise<any> {

    return new Promise((resolve) => {
      resolve();
    });
  }

  facebookLogin(): Promise<any>  {

    return new Promise((resolve) => {
      resolve();
    });

  }

  signupUser(email: string, password: string): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  resetPassword(email: string): Promise<void> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  logoutUser(): Promise<void> {
    return new Promise((resolve) => {
      resolve();
    });
  }
}
