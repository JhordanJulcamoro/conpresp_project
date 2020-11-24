$(document).ready(function () {
  listarDatosTabla();
});

var table = $("#tablaHome").DataTable({
  pageLength: 5,
  lengthMenu: [
    [5, 10, 20, -1],
    [5, 10, 20, "Todos"],
  ],
  data: dataSet,
  columnDefs: [
    {
      targets: [0],
      visible: false, //ocultamos la columna de ID que es la [0]
    },
    {
      targets: -1,
      defaultContent: content_buttons,
    },
  ],
});

$("#tablaHome").on("click", ".btnEditar", function () {
  filaEditada = table.row($(this).parents("tr"));
  let fila = $("#tablaHome").dataTable().fnGetData($(this).closest("tr"));
  let uid_prenchimento = fila[0];
  let id_conpresp = fila[1];
  localStorage.setItem("key", uid_prenchimento);
  location.href = "doc_conpresp.html?edit=" + id_conpresp;
});

$("#tablaHome").on("click", ".btnVer", function () {
  let fila = $("#tablaHome").dataTable().fnGetData($(this).closest("tr"));
  let id_conpresp = fila[0];
  console.log("Ver doc " + id_conpresp);
});

$("#tablaHome").on("click", ".btnPdf", function () {
  let fila = $("#tablaHome").dataTable().fnGetData($(this).closest("tr"));
  let id_conpresp = fila[0];
  console.log("Gerar pdf " + id_conpresp);
});

btnLogout.addEventListener("click", (e) => {
  e.preventDefault();
  logoutUsuario();
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
