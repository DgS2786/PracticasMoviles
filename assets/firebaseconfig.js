import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBeW9uSr0hRTITjLxxAwwoLn9vfRCLWwtQ",
    authDomain: "practicasmoviles-7f530.firebaseapp.com",
    projectId: "practicasmoviles-7f530",
    storageBucket: "practicasmoviles-7f530.firebasestorage.app",
    messagingSenderId: "1083079011624",
    appId: "1:1083079011624:web:2e21b7bcb83f400e8b341d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);