import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-KgiKs16BWuIayLN6Mpi640BDoL7IwOU",
  authDomain: "chat-gpt-clone-d9d71.firebaseapp.com",
  projectId: "chat-gpt-clone-d9d71",
  storageBucket: "chat-gpt-clone-d9d71.appspot.com",
  messagingSenderId: "810805509642",
  appId: "1:810805509642:web:aa2054992bef1ee81c69f3",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
