import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireAuthStub {

  constructor() { }

  public auth = {
    setting: {},

    // Current user logged
    currentUser: {
      uid: '1'
    },

    signInWithEmailAndPassword: (email, password) => {

    },

    createUserWithEmailAndPassword: () => {
        // Return a promise
    }

  };
}
