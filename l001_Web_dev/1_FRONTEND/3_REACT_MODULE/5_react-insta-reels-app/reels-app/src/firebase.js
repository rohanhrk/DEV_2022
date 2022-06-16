import firebase from "firebase/app";
import "firebase/auth";
let object = require("./secrets");
firebase.initializeApp(object);
let auth = firebase.auth();
export default auth;