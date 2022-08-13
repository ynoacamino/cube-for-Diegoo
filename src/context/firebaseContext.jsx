/* eslint-disable react/jsx-no-constructed-context-values */
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  React, createContext, useContext, useEffect, useState,
} from 'react';
import {
  getDoc, doc, setDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no Auth provider');
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const saveTimes = (times, uid) => setDoc(doc(db, 'times', uid), { times, uid });
  const getTimes = (uid) => getDoc(doc(db, 'times', uid));

  useEffect(() => {
    const unsubuscribre = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribre();
  }, []);
  return (
    <authContext.Provider
      value={{
        user,
        loading,
        loginWithGoogle,
        logout,
        saveTimes,
        getTimes,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
