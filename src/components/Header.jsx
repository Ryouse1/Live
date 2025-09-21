import React from "react";

export default function Header({adminLogin}) {
  return (
    <header>
      <h1>Live配信アプリ</h1>
      <button onClick={adminLogin}>管理者ログイン</button>
    </header>
  );
}
