import { useContext, createContext, useState, useEffect } from "react";
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth'
import {auth, firestore} from '../config/firebase'
import { collection, getDocs,  doc, addDoc, deleteDoc } from 'firebase/firestore';
 const AuthContext = createContext()

 export const  AuthContextProvider = ({children}) => {
     const [user, setUser] = useState({});
     const [products, setProducts] = useState([]);

     const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider); 
}

const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setUser(user);
    console.log('User logged in with Facebook:', user);
  } catch (error) {
    console.error('Error signing in with Facebook:', error.message);
    throw error;
  }
};

    const logOut = () => {
        signOut(auth)
    }


    const createUserWithEmailPassword = async (email, password, name, phoneNumber, profilePic) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const newUser = userCredential.user;
      
          // Update user profile information (name, phone number, profile picture)
          await updateProfile(newUser, {
            displayName: name,
            phoneNumber: phoneNumber,
            photoURL: profilePic,
          });
      
          setUser(newUser);
          console.log('User created:', newUser);
        } catch (error) {
          console.error('Error creating user:', error.message);
          throw error;
        }
      }

      const authenticateUserWithEmailPassword = async (email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const loggedInUser = userCredential.user;
    
          // Update state or perform actions for the logged-in user
          setUser(loggedInUser);
          console.log('User logged in:', loggedInUser);
        } catch (error) {
          console.error('Error signing in:', error.message);
          throw error;
        }
      };

      useEffect(() => {
        const fetchEvent = async () => {
          const EventSnapshot = await getDocs(collection(firestore, "production"));
          setProducts(EventSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
          };
          fetchEvent();
      },[]);


      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <AuthContext.Provider value={{signInWithGoogle, signInWithFacebook, logOut, createUserWithEmailPassword, authenticateUserWithEmailPassword, user, products }}>
            {children}
        </AuthContext.Provider>
    )
 }

 export const UserAuth = () => {
    return useContext(AuthContext)
 }