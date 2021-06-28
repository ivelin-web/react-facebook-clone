import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiQljitlNrctDXqw8idmOCP0SXAuot3QI",
    authDomain: "fb-clone-react-30363.firebaseapp.com",
    projectId: "fb-clone-react-30363",
    storageBucket: "fb-clone-react-30363.appspot.com",
    messagingSenderId: "700178651196",
    appId: "1:700178651196:web:8c68c2450abeb41f8dcb39",
    measurementId: "G-E1EGJ2ZQ9Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
