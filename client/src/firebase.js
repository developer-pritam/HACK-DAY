import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxqBc1_Vr8PNdMSNAE4pBZoff1fhX8m1A",
  authDomain: "tfl-solana.firebaseapp.com",
  projectId: "tfl-solana",
  storageBucket: "tfl-solana.appspot.com",
  messagingSenderId: "1087966987466",
  appId: "1:1087966987466:web:6075ab92d77de35d05e033",
};

const app = initializeApp(firebaseConfig, "sgdyfh");
// export const firestore = getFirestore();
export const auth = getAuth(app);
// export const firebaseDB = getDatabase();
export default app;
