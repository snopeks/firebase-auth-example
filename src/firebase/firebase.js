import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDektCXJQ_Qauium6YoN4cs06vwVUrFFok",
  authDomain: "react-firebase-6fb21.firebaseapp.com",
  databaseURL: "https://react-firebase-6fb21.firebaseio.com",
  projectId: "react-firebase-6fb21",
  storageBucket: "",
  messagingSenderId: "410340309577"
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};