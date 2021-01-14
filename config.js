import * as firebase from 'firebase'
 require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt1ANsxeKe-x3JAd3K5le6jXl0GoR5fBM",
    authDomain: "willy-app-54f75.firebaseapp.com",
    projectId: "willy-app-54f75",
    storageBucket: "willy-app-54f75.appspot.com",
    messagingSenderId: "110747722916",
    appId: "1:110747722916:web:f63d51cceead450c9a3231",
    measurementId: "G-F16S239L2W"
  };
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
   export default firebase.firestore();
