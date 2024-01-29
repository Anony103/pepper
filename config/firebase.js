import {initializeApp}  from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_hmE4xaX9VITtQdJXzqGpYESn65A4o9k",
    authDomain: "pepper-f6172.firebaseapp.com",
    projectId: "pepper-f6172",
    storageBucket: "pepper-f6172.appspot.com",
    messagingSenderId: "1057816199865",
    appId: "1:1057816199865:web:f58220a498e70cfda31168",
    measurementId: "G-KNMRBFE62L"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);