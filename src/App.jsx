import React, { useState } from "react";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { getFirestore } from "firebase/firestore";

export default function App() {
  const db = getFirestore();
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  return (
    <>
      {!currentRoom && <Home rooms={rooms}/>}
      {currentRoom && <Room db={db}/>}
    </>
  );
}
