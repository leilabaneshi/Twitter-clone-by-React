import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAm04fwxV7VPOQbJM71uZ6hRWGntAmOJSw",
    authDomain: "twitter-clone-b8747.firebaseapp.com",
    databaseURL: "https://twitter-clone-b8747.firebaseio.com",
    projectId: "twitter-clone-b8747",
    storageBucket: "twitter-clone-b8747.appspot.com",
    messagingSenderId: "946128333566",
    appId: "1:946128333566:web:eec94589df6ed8235513af",
    measurementId: "G-370GPPRE9T"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();






export default db;

