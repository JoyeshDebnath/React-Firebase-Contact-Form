import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database

var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAL6Vj2eE1X6t9oA-rIC8fH2E0x0i4veJ8",
	authDomain: "contact-form-2fa6f.firebaseapp.com",
	projectId: "contact-form-2fa6f",
	storageBucket: "contact-form-2fa6f.appspot.com",
	messagingSenderId: "168716074047",
	appId: "1:168716074047:web:289d15cc02eee002e50c8a",
});

var db = firebaseApp.firestore();

export { db };
