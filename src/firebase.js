import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAuOKVlfSv1LIiBsSg-bLm-Obz1tgQIx4",
    authDomain: "linkedin-clone-93a25.firebaseapp.com",
    projectId: "linkedin-clone-93a25",
    storageBucket: "linkedin-clone-93a25.appspot.com",
    messagingSenderId: "859710980573",
    appId: "1:859710980573:web:05c5c9538fa130a7003634",
    measurementId: "G-MD3BKKRQT8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  {db, auth};