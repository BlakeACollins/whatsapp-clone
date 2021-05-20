import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOfG8a-lBDWzFKXA6WqnFk7oufdN13Vfc",
    authDomain: "whatsapp-clone-99dab.firebaseapp.com",
    projectId: "whatsapp-clone-99dab",
    storageBucket: "whatsapp-clone-99dab.appspot.com",
    messagingSenderId: "308622721779",
    appId: "1:308622721779:web:2edd7d415befc4b7472d86"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig)
   : firebase.app();

   const db  = app.firestore();
   const auth = app.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export { db, auth, provider };