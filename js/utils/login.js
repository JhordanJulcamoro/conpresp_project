loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;
  loginUsuario(email, password);
});

resetPasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#resetpasswordEmail").value;
  resetPassword(email);
});

// btnVerificarEmail.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("envio de confimacion al email");
// });
