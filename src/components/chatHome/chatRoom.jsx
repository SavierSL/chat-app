import React, { useState, useRef } from "react";
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./chatMessage";
import { firestore, auth } from "../../App";
import "../styles/sass/globalStyles.scss";

const ChatRoom = () => {
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const auth = firebase.auth();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  console.log(messages);

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="signOut" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }
  const SendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {" "}
      <SignOut />
      <div className="chatRoom">
        <div className="messages" style={{ marginBottom: "2rem" }}>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </div>
      </div>
      <div className="form">
        <form onSubmit={SendMessage}>
          <input
            className="inputText"
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button className="send">send</button>
        </form>
      </div>
    </>
  );
};

export default ChatRoom;
