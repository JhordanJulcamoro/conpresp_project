logoutButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await logout();
});

// const btnRegistrar = document.querySelector("#btnRegistrar");
// btnRegistrar.addEventListener("click", (e) => {
//   e.preventDefault();
//   const user = {
//     nomes: "Jhordan", //string
//     sobrenomes: "Julcamoro", //string
//     email: "jhordanjulcamoro@gmail.com", //string
//     password: "uuuuuuu", //string
//     nivelUsuario: 1, //int (1-Global,2-Usuario medio,3-Usuario general)
//     estadoUsuario: true, //Boolean (true-activo,false-inactivo)
//     fotoUsuario: "http/jhordanjulcamoro.com", //url
//   };
//   //   actualizarDataFireStore(User);
//   //   cadastrarUsuario(user);
// });

// btnRegistrar.addEventListener("click", (e) => {
//   e.preventDefault();
//   try {
//     const usuario = cadastrarUsuario(email, password);
//     if (usuario) {
//       const esVerificado = esEmailVerificado(usuario);
//       redireccionarUsuario(esVerificado);
//     }
//   } catch (error) {
//     console.log("Error->", error);
//   }
// });

// function redireccionarUsuario(esVerificado) {
//   if (esVerificado) {
//     window.location.replace("home.html");
//   } else {
//     //abrir apartado que indique que el email no esta verificado!
//     // window.location.replace("verificar-email.html");
//   }
// }
