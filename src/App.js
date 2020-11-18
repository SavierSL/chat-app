import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import SignIn from "./components/signIn/signIn";
import ChatRoom from "./components/chatHome/chatRoom";

firebase.initializeApp({
  // config
  apiKey: "AIzaSyCs_ujr6rOc_DqOavEkX8tv3WEF3F7fVmE",
  authDomain: "chat-app-c5218.firebaseapp.com",
  databaseURL: "https://chat-app-c5218.firebaseio.com",
  projectId: "chat-app-c5218",
  storageBucket: "chat-app-c5218.appspot.com",
  messagingSenderId: "532525262399",
  appId: "1:532525262399:web:20a74134e7421bc0a9fa8a",
  measurementId: "G-T53ENELGGF",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <ChatRoom /> : <SignIn />}</div>;
}

export default App;
