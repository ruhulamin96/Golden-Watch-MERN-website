import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isload, setIsload] = useState(true);
  const [cart , setCart]=useState([]);
  ///create new user
  const createUser = (email, password, history, location, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("registration creation successs");
        const destination = location?.state?.from || "/";
        history.push(destination);

        ///update profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //Observer
  useEffect(() => {
    setIsload(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
  //       axios.get(`https://enigmatic-fjord-26508.herokuapp.com/placeOrders?email=${user?.email}`)
  // .then((result) => { setIsload(false)
  //   setCart(result.data)});
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
      return () => unsubscribe;
    });
  }, [user.email]);
  //signin user
  const loginUser = (email, password, history, location) => {
    // console.log('admin ', (location.state.from.pathname).includes('/newdashboard'))
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        axios
        .get(
          `https://enigmatic-fjord-26508.herokuapp.com/users?email=${email}`
        )
        .then((result) => {
          if(result.data.admin){
            history.push('/newdashboard');
          }
          setIsAdmin(result.data.admin);
          setIsload(false);
        });

        const user = userCredential.user;
        alert("login success");
        if((location?.state?.from?.pathname)?.includes('/newdashboard')){
          history.push('/newdashboard')
        }else{

          const destination = location?.state?.from || "/";
          history.push(destination);
        }
      })
      .catch((error) => {
        setError(error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        alert("log out success");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    cart,
    createUser,
    loginUser,
    logout,
    isLoading,
    error,isAdmin
  };
};
export default useFirebase;
