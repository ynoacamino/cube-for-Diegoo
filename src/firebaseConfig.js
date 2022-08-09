// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbBhzDZX9DWARZq2Kx9SjX1xf_V_gUWC4',
  authDomain: 'cubetimer-af0a6.firebaseapp.com',
  projectId: 'cubetimer-af0a6',
  storageBucket: 'cubetimer-af0a6.appspot.com',
  messagingSenderId: '895603933678',
  appId: '1:895603933678:web:7716a131fb4106b2184eff',
  measurementId: 'G-EY5020SYPJ',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
