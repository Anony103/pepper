import { useContext, createContext, useState, useEffect } from "react";
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, FacebookAuthProvider} from 'firebase/auth'
import {auth, firestore} from '../config/firebase'
import { collection, getDocs, addDoc, } from 'firebase/firestore';
 const AuthContext = createContext()

 export const  AuthContextProvider = ({children}) => {
     const [user, setUser] = useState({});
     const [products, setProducts] = useState([]);
     const [profile, setProfile] = useState([]);


     const addUser = async (item) => {
      try {
        // Add the form data to Firestore
        const docRef = await addDoc(collection(firestore, "profile"), {
          fullname: item.fullname,
          address: item.address,
          state: item.state,
          city: item.city,
          zipcode: item.zipcode,
          dob: item.dob,
          phone: item.phone,
          email: item.email,
          ssn: item.ssn,
          bankName: item.bankName,
          vehicleType: item.vehicleType,
          frontURL: item.frontURL,
          backURL: item.backURL,
        });
  
        console.log("Document written with ID: ", docRef.id);
  
        // You can also redirect the user or perform other actions after successful submission
      } catch (error) {
        console.error("Error adding document: ", error);
        // Handle errors or show a user-friendly message
      }
    };
  

    useEffect(() => {
      const fetchProfile = async () => {
        const EventSnapshot = await getDocs(collection(firestore, "profile"));
        setProducts(EventSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        fetchProfile();
    },[]);

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


    const createUserWithEmailPassword = async (email, password, firstname, lastname) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
    
        // Update user profile information (first name, last name)
        await updateProfile(newUser, {
          displayName: `${firstname} ${lastname}`,
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
        <AuthContext.Provider value={{signInWithGoogle, signInWithFacebook, logOut, createUserWithEmailPassword, authenticateUserWithEmailPassword, user, products, addUser }}>
            {children}
        </AuthContext.Provider>
    )
 }

 export const UserAuth = () => {
    return useContext(AuthContext)
 }