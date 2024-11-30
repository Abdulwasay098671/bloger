import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBXlzljWVBhFDf-wYS-2eJ17mbtlX7v32I",
  authDomain: "blog-wesite-7b859.firebaseapp.com",
  projectId: "blog-wesite-7b859",
  storageBucket: "blog-wesite-7b859.firebasestorage.app",
  messagingSenderId: "1019100967873",
  appId: "1:1019100967873:web:d7b4da228559ad49573540"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
window.signup = () => {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      window.location.href="../main/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });

}
