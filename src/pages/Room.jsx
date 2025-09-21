import React from "react";
import ChatBox from "../components/ChatBox";

export default function Room({db}) {
  return (
    <div className="room-page">
      <h2>配信ルーム</h2>
      <ChatBox db={db}/>
      {/* Daily.co / LiveKit 配信用ボタンやUIここに追加可能 */}
    </div>
  );
}
