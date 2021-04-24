import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaVZU9n7751Liiqzy3GuNtLyikxf5u2wY",
  authDomain: "slack-clone-react-feeeb.firebaseapp.com",
  projectId: "slack-clone-react-feeeb",
  storageBucket: "slack-clone-react-feeeb.appspot.com",
  messagingSenderId: "321353427056",
  appId: "1:321353427056:web:f845fddec367b08980acb5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
