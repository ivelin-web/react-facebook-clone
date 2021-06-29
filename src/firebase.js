import firebase from "firebase";
import environment from "./environment";

const firebaseApp = firebase.initializeApp(environment.firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
