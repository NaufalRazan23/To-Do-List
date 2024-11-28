import { initializeApp } from '@react-native-firebase/app';
import { getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsqTTfX1-8UjJD_sYBPW_Ae8rtNKrb2C4",
    authDomain: "to-do-list-new-1995e.firebaseapp.com",
    projectId: "to-do-list-new-1995e",
    storageBucket: "to-do-list-new-1995e.firebasestorage.app",
    messagingSenderId: "169164404712",
    appId: "1:169164404712:web:57371553418ea1bbced65d",
    measurementId: "G-VTFGMKTDMT"
  };
  
  const app = initializeApp(firebaseConfig);

export const db = getfirestore(app);