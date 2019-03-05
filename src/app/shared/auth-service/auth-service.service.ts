import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }


  isLoggedIn() {
    return this.afAuth.auth.currentUser != null;
  }

  getCurrentUser() {
   return this.afAuth.auth.currentUser;
  }

  loginUser(email: string, password: string): Promise<any> {
    this.afAuth.auth.settings;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  facebookLogin(): Promise<any>  {

    // Sign in using a popup.
    const provider = new firebase.auth.FacebookAuthProvider();
   return  firebase.auth().signInWithPopup(provider);

  }

  signupUser(email: string, password: string): Promise<any> {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(newUserCredential => {
        this.firestore
          .doc(`/userProfile/${newUserCredential.user.uid}`)
          .set({ email });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
