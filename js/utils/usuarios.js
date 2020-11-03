window.onload = function () {
  console.log("Pagina cargada");
  db.collection("users").onSnapshot(
    (snapshot) => {
      getUsersData(snapshot.docs);
    },
    (err) => {}
  );
};

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
