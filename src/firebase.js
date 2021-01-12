import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDarL_u-nPZz6VZT1HI0RTzCt_3wdhvpRg",
    authDomain: "clone-5f3a0.firebaseapp.com",
    projectId: "clone-5f3a0",
    storageBucket: "clone-5f3a0.appspot.com",
    messagingSenderId: "208717808049",
    appId: "1:208717808049:web:e9767397ba40fa48b8fd90",
    measurementId: "G-LRNGMNDWT5"
  };

  constvfirebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();