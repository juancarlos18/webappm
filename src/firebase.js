import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBE-UsunbCGiBmTWUMK1IdILLVq032YabM",
    authDomain: "app-web-1cde7.firebaseapp.com",
    projectId: "app-web-1cde7",
    storageBucket: "app-web-1cde7.appspot.com",
    messagingSenderId: "586460052123",
    appId: "1:586460052123:web:06f4958fab96269322a43e"
  });

  /*const app = initializeApp(firebaseConfig);*/
  export const db = getFirestore(firebaseApp);