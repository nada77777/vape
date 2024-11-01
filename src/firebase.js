import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PB_FIREBASE_API_KEY, //
  authDomain: import.meta.env.VITE_PB_FIREBASE_AUTH_DOMAIN, //
  projectId: import.meta.env.VITE_PB_FIREBASE_PROJECT_ID, //
  databaseURL: import.meta.env.VITE_PB_FIREBASE_DB_URL, //
};

export const firebaseApp = initializeApp(firebaseConfig);