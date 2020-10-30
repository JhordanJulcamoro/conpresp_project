var firebaseConfig = {
  apiKey: "AIzaSyDXHP95xunTSBO0U61PlNhOLjyjXmIVXRI",
  authDomain: "conpresp.firebaseapp.com",
  databaseURL: "https://conpresp.firebaseio.com",
  projectId: "conpresp",
  storageBucket: "conpresp.appspot.com",
  messagingSenderId: "493438146924",
  appId: "1:493438146924:web:7b8ba5f8aacb97b114fb49",
  measurementId: "G-RV1V75RE2Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
