const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Bem-vindo");
      window.location.replace("home.html");
    })
    .catch((error) => {
      alert(error);
    });
});
