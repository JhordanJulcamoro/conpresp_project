// agregarUsuarioForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   try {
//     cadastrarUsuario(user);
//     //limpiando modal
//     document.getElementById("agregarUsuarioForm").reset();
//     // agregarUsuarioForm.reset();
//     //cerrando modal
//     $("#agregarUsuarioModal").modal("hide");
//     console.log("se registró");
//   } catch (error) {
//     alert(error.message);
//   }
// });

agregarUsuarioForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const usuario = getCadastroFormInfo();
    await cadastro(usuario);
  } catch (ex) {
    alert("An error ocurred trying to signup: " + ex.message);
  } finally {
    // agregarUsuarioForm.reset();
    document.getElementById("agregarUsuarioForm").reset();
    $("#agregarUsuarioModal").modal("hide");
  }
});
