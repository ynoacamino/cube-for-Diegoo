import { initializeApp } from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbBhzDZX9DWARZq2Kx9SjX1xf_V_gUWC4',
  authDomain: 'cubetimer-af0a6.firebaseapp.com',
  projectId: 'cubetimer-af0a6',
  storageBucket: 'cubetimer-af0a6.appspot.com',
  messagingSenderId: '895603933678',
  appId: '1:895603933678:web:7716a131fb4106b2184eff',
  measurementId: 'G-EY5020SYPJ',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
