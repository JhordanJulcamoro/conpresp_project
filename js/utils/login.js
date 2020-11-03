loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const { email, password } = getLoginFormInfo();
    await login(email, password);
    window.location.replace("home.html");
  } catch (ex) {
    alert("An error ocurred trying to signup: " + ex.message);
  }
});

resetPasswordForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const email = getRestPasswordInfo();
    await resetPassword(email);
  } catch (ex) {
    alert("An error ocurred trying to reset: " + ex.message);
  } finally {
    resetPasswordForm.reset();
    $("#resetPasswordModal").modal("hide");
  }
});

// btnVerificarEmail.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("envio de confimacion al email");
// });
