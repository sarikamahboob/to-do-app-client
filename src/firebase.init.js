// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpuoM1NnDptDzQnYxOcp0Uu11ZQzPUYo",
  authDomain: "to-do-app-client.firebaseapp.com",
  projectId: "to-do-app-client",
  storageBucket: "to-do-app-client.appspot.com",
  messagingSenderId: "469656682223",
  appId: "1:469656682223:web:664d9d0bcb07b8e683e51a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
