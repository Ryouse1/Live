import React from "react";
import RoomCard from "../components/RoomCard";

export default function Home({rooms}) {
  return (
    <div className="home">
      <h2>急上昇配信者</h2>
      <div className="room-list">
        {rooms.map(r=><RoomCard key={r.id} room={r}/>)}
      </div>
    </div>
  );
}
