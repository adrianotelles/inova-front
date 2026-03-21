import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environments } from "@environments/environments";

const firebaseApp = initializeApp(environments.firebase);
export const db = getFirestore(firebaseApp);