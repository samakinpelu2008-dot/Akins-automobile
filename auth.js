<!-- js/auth.js -->
<script type="module">
  import {
    onAuthStateChanged,
    signOut
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  // Protect pages that require login
  window.protectPage = function (redirectTo = "login.html") {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = redirectTo;
      }
    });
  };

  // Redirect logged-in users away from login/register
  window.redirectIfLoggedIn = function (redirectTo = "index.html") {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = redirectTo;
      }
    });
  };

  // Logout
  window.logout = async function () {
    try {
      await signOut(auth);
      window.location.href = "login.html";
    } catch (err) {
      alert("Logout failed");
    }
  };

  // Get current user (promise-based)
  window.getCurrentUser = function () {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });
  };
</script>
