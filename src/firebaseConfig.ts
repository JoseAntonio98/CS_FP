import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeCG_C-azqTwoluA2-s7oSSLNvWo-tvTY",
    authDomain: "ventaonline-db.firebaseapp.com",
    projectId: "ventaonline-db",
    storageBucket: "ventaonline-db.appspot.com",
    messagingSenderId: "137549426586",
    appId: "1:137549426586:web:84124b3d89dcd1a7d25423",
    measurementId: "G-CL5H0QLE1F"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // base de datos
export const auth = getAuth();

