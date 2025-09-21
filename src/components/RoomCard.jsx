import React from "react";

export default function RoomCard({room}) {
  return (
    <div className="room-card">
      <img src={room.icon} alt={room.name}/>
      <div>{room.name}</div>
      <div>{room.status}</div>
    </div>
  );
}
