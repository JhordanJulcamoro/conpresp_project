agregarUsuarioForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#agregarUsuarioName").value;
  const email = document.querySelector("#agregarUsuarioEmail").value;
  const password = document.querySelector("#agregarUsuarioPassword").value;
  const select = document.getElementById("agregarUsuarioSelect");
  const tipoUsuario = select.options[select.selectedIndex].value;

  const user = {
    name: name,
    email: email,
    password: password,
    tipoUsuario: tipoUsuario,
    estadoUsario: true,
  };
  try {
    cadastrarUsuario(user);
    //limpiando modal
    document.getElementById("agregarUsuarioForm").reset();
    // agregarUsuarioForm.reset();
    //cerrando modal
    $("#agregarUsuarioModal").modal("hide");
    console.log("se registró");
  } catch (error) {
    alert(error.message);
  }
});
