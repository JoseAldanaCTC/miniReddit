import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpqSS5puSW8Ba0kqOPBj0CVFsy4EazGuU",
  authDomain: "fir-app-prueba-bf1ab.firebaseapp.com",
  projectId: "fir-app-prueba-bf1ab",
  storageBucket: "fir-app-prueba-bf1ab.appspot.com",
  messagingSenderId: "124582412098",
  appId: "1:124582412098:web:4f568009220096154392db",
  measurementId: "G-60BK199GDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      alert("on");

      // ...
    } else {
        window.location.href="error404.html";

    }
  });


  


