import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
    public providerTwitter: firebase.auth.TwitterAuthProvider;
    public providerEmail: firebase.auth.EmailAuthProvider;

    constructor(private afAuth: AngularFireAuth) {

    }

    loginUserWithGithub() {
        this.providerTwitter = new firebase.auth.TwitterAuthProvider;
        //this.providerTwitter. ("user:email");
        return firebase.auth().signInWithRedirect(this.providerTwitter)
        .then(user=>Promise.resolve(user)
        .catch(err=>Promise.reject(err)));
    }
}