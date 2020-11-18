import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "../styles/sass/globalStyles.scss";

const SignIn = () => {
  const auth = firebase.auth();
  const signInWthGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="signIn" onClick={signInWthGoogle}>
        Sign in with Google
      </button>
    </>
  );
};

export default SignIn;
