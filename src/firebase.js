import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAaeV11e__q9BA7M8rN4j1mmEsrKht8_BM",
  authDomain: "comision-31195-12266.firebaseapp.com",
  projectId: "comision-31195-12266",
  storageBucket: "comision-31195-12266.appspot.com",
  messagingSenderId: "624078040443",
  appId: "1:624078040443:web:5a0f83b4dac0ec12a861de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const productosDB = getFirestore(app)
