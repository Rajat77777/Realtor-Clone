// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHCLBDl3aChS0s1yud5TL2EZcGVuulR0",
  authDomain: "realtor-clone-react-98f69.firebaseapp.com",
  projectId: "realtor-clone-react-98f69",
  storageBucket: "realtor-clone-react-98f69.appspot.com",
  messagingSenderId: "767410692198",
  appId: "1:767410692198:web:06c0089038c4a449348da7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();