import React from "react";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBPqdtNL-Lba4dOEnzHb1Yh5lleLCA13ME",
  authDomain: "chat-app-2b4ad.firebaseapp.com",
  databaseURL: "https://chat-app-2b4ad.firebaseio.com",
  projectId: "chat-app-2b4ad",
  storageBucket: "chat-app-2b4ad.appspot.com",
  messagingSenderId: "1052211932105",
  appId: "1:1052211932105:web:c5310a7b3230d8ba955618",
  measurementId: "G-DV1FXKVNCD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
