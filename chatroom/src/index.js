import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCYQfWdtOGbgHBFPQrlUr0MkFXWVC3Hus",
  authDomain: "react-chat-app-fc3a5.firebaseapp.com",
  databaseURL: "https://react-chat-app-fc3a5-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-fc3a5",
  storageBucket: "react-chat-app-fc3a5.appspot.com",
  messagingSenderId: "2147305545",
  appId: "1:2147305545:web:d89e41e317ed9f2d3d9798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
