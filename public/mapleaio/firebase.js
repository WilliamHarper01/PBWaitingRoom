// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxXy-XZUqOXm6uJMK5fKOsaeVvswwktY",
  authDomain: "pbwaitingroom.net",
  databaseUrl: "pbwaitingroom.net",
  projectId: "pbwaitingroom",
  storageBucket: "mapleaio.appspot.com",
  messagingSenderId: "31818737915",
  appId: "1:31818737915:web:e1c9e6a17ee3427387285e",
  measurementId: "G-EV5VDES0EM"
};

export const app =  initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);