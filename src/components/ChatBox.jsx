import React, { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

export default function ChatBox({db}) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(()=>{
    const unsub = onSnapshot(collection(db,"messages"), snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()));
    });
    return ()=> unsub();
  }, [db]);

  const sendMessage = async () => {
    if(!text) return;
    await addDoc(collection(db,"messages"), {text, createdAt:new Date()});
    setText("");
  }

  return (
    <div className="chat">
      <div className="chat-window">
        {messages.map((m,i)=><div key={i}>{m.text}</div>)}
      </div>
      <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
      <button onClick={sendMessage}>送信</button>
    </div>
  );
}
