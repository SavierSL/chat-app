import React, { useRef } from "react";
import { firestore, auth } from "../../App";
const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  console.log(text);

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="" />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
