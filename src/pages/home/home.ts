import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { TwitterConnect } from '@ionic-native/twitter-connect';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user;
  
  constructor(public navCtrl: NavController,public twitterConnect: TwitterConnect,
    public afAuth: AngularFireAuth,
    public platform: Platform) {

  }

  login() {
    this.twitterConnect.login().then(this.onSuccess, this.onError);
  }
  
  onSuccess(response) {
    console.log('response', response);
    console.log(response.userName);
    console.log(response.userId);
    console.log(response.secret);
    console.log(response.token);

    const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);

      this.afAuth.auth.signInWithCredential(twitterCredential)
      .then(res => {
        this.user = res;
      })
      .catch(error => console.log('error', error))
  }

  onError(error) {
    console.log('error', error);
}

}
