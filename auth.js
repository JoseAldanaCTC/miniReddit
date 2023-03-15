// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'

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

alert("hola");

$("#guardar").click(function () {

    alert("entrando");
    let email=$("#correo").val();
    alert(email);
    let password=$("#contraseña").val();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
})


$("#entrar").click(function () {

    alert("entrando");
    let email=$("#correo").val();
    alert(email);
    let password=$("#contraseña").val();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("inicio exitoso");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
})