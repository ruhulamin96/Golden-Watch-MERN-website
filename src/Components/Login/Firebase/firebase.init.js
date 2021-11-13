import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeFirebase=()=>{
    const auth= initializeApp(firebaseConfig);
   return auth;
}
export default initializeFirebase;