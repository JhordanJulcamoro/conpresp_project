loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;
  $(".loading-icon").removeClass("d-none");
  $(".button").attr("disabled", true);
  $(".btn-txt").text("Iniciando sessão...");
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
