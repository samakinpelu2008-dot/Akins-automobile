<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDCBD2gVIg9v-KqYaMFZeu_grgs3yKYfPs",
    authDomain: "fir-chat-f8d55.firebaseapp.com",
    projectId: "fir-chat-f8d55",
    storageBucket: "fir-chat-f8d55.firebasestorage.app",
    messagingSenderId: "792896094694",
    appId: "1:792896094694:web:dd373e5d7d2fc9ae1d5627"
  };

  const app = initializeApp(firebaseConfig);

  window.auth = getAuth(app);
  window.db = getFirestore(app);
  window.storage = getStorage(app);
</script>
