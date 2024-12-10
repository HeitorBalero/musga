import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importar getAuth

const firebaseConfig = {
  apiKey: "AIzaSyBIqQK6thyzI2Te63UnqNJdnmv2pnKl4PM",
  authDomain: "appmusicas2.firebaseapp.com",
  projectId: "appmusicas2",
  storageBucket: "appmusicas2.firebasestorage.app",
  messagingSenderId: "588722792251",
  appId: "1:588722792251:web:34dff7ec89490e58bb391e"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app); // Exportar auth
