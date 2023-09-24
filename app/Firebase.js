import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAJ-9pfCzCShtwe_QawHfcCGDkjmUv7n4Y",
  authDomain: "legaleaseweb.firebaseapp.com",
  projectId: "legaleaseweb",
  storageBucket: "legaleaseweb.appspot.com",
  messagingSenderId: "159997387852",
  appId: "1:159997387852:web:865daa5e3a4ad56fbd80e9",
  databaseURL: "https://legaleaseweb-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);



