import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCuoAw2KhWwWO1OFMZDI4ETCkPiela5G6I",
    authDomain: "projects-22dad.firebaseapp.com",
    projectId: "projects-22dad",
    storageBucket: "projects-22dad.appspot.com",
    messagingSenderId: "471985372749",
    appId: "1:471985372749:web:44f55e084232f077812604"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


