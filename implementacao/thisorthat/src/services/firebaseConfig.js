import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmGs0H_QPZRgfpfea56fsJt_SJfJKLv2w",
  authDomain: "thisorthat-e3b9c.firebaseapp.com",
  projectId: "thisorthat-e3b9c",
  storageBucket: "thisorthat-e3b9c.appspot.com",
  messagingSenderId: "651975346038",
  appId: "1:651975346038:web:3093099411dbc360a6dc57",
  measurementId: "G-6SMMX76T00"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)