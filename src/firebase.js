import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBbf69yQTHMS-WssGP5bq-zPt6I78JteHI",
    authDomain: "goalcoach-e4bde.firebaseapp.com",
    databaseURL: "https://goalcoach-e4bde.firebaseio.com",
    projectId: "goalcoach-e4bde",
    storageBucket: "goalcoach-e4bde.appspot.com",
    messagingSenderId: "1082494419462"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoal');
