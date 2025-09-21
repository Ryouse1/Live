import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyDQc8fko7Hfo2R8wqNwqyS0S-I82SeM-6w",
  authDomain: "haishin-32cbb.firebaseapp.com",
  projectId: "haishin-32cbb",
  storageBucket: "haishin-32cbb.firebasestorage.app",
  messagingSenderId: "535597979065",
  appId: "1:535597979065:web:d4016468be0d43b33ad268",
  measurementId: "G-WKZ4KE5J19"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// 管理者 UID（あなたの UID に置き換えてください）
const ADMIN_UID = "管理者UID固定";

// 管理者ログイン
document.getElementById('admin-login').addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  const user = result.user;
  if(user.uid===ADMIN_UID) alert("管理者ログイン成功");
  else alert("あなたは管理者ではありません");
});

// コメント送信
document.getElementById('send-chat').addEventListener('click', async () => {
  const input = document.getElementById('chat-input');
  if(input.value.trim()==='') return;
  await addDoc(collection(db,"messages"), {text:input.value, createdAt:new Date()});
  input.value='';
});

// コメントリアルタイム表示
onSnapshot(collection(db,"messages"), snapshot => {
  const chatWindow = document.querySelector('.chat-window');
  chatWindow.innerHTML='';
  snapshot.forEach(doc => {
    const msg = document.createElement('div');
    msg.textContent=doc.data().text;
    chatWindow.appendChild(msg);
  });
});
