const tbodyList = document.querySelector("#tbodyList");
let filaEliminada; //para capturara la fila eliminada
let filaEditada; //para capturara la fila editada o actualizada

var dataSet = [];
const iconoVer = "<i class='fas fa-eye'></i>";
const iconoEditar = "<i class='fas fa-edit'></i>";
const iconoEliminar = "<i class='fas fa-trash-alt'></i>";
const iconoPdf = "<i class='fas fa-print'></i>";
// const iconoEditar =
//   '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
// const iconoBorrar =
//   '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';

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
      defaultContent:
        "<div class='wrapper text-center'><div class='btn-group'><button class='btnVer btn btn-info' data-toggle='tooltip' title='Ver'>" +
        iconoVer +
        "</button><button class='btnEditar btn btn-warning' data-toggle='tooltip' title='Editar'>" +
        iconoEditar +
        "</button><button class='btnPdf btn btn-success' data-toggle='tooltip' title='Pdf'>" +
        iconoPdf +
        "</button></button></div></div>",
    },
  ],
});

$(document).ready(function () {
  traerDatosTabla();
});

function traerDatosTabla() {
  db.collection("conpresp_v1")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        var coleccionData = doc.data();
        dataSet = [
          doc.id,
          // coleccionData.CODIGO_LPP,

          coleccionData.CONPRESP,
          coleccionData.DENOMINACIONES,
          // coleccionData.LPP,
          coleccionData.PRESERVACAO,
          coleccionData.CONSERVACAO,
        ];
        table.rows.add([dataSet]).draw();
      });
    });
}

$("#tablaHome").on("click", ".btnEditar", function () {
  filaEditada = table.row($(this).parents("tr"));
  let fila = $("#tablaHome").dataTable().fnGetData($(this).closest("tr"));
  let id_conpresp = fila[0];
  localStorage.setItem("key", id_conpresp);
  console.log("Editando " + id_conpresp);
  location.href = "editar_conpresp.html";

  // let codigo_lpp = $(this).closest("tr").find("td:eq(0)").text();
  // let conpresp = $(this).closest("tr").find("td:eq(1)").text();
  // // let cantidad = parseInt($(this).closest("tr").find("td:eq(2)").text());
  // let lpp = $(this).closest("tr").find("td:eq(2)").text();
  // $("#id").val(id_Prueba);
  // $("#codigo").val(codigo_lpp);
  // $("#descripcion").val(conpresp);
  // $("#cantidad").val(lpp);
  // $("#modalAltaEdicion").modal("show");
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

// $(document).ready(function () {
//   tbodyList.innerHTML = "";
//   let index = 1;
//   db.collection("conpresp_v1")
//     .get()
//     .then((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         const docData = doc.data();
//         let tr = document.createElement("tr");
//         let th_id = document.createElement("th");
//         let td_codlpp = document.createElement("td");
//         let td_conpresp = document.createElement("td");
//         let td_lpp = document.createElement("td");
//         let td_preser = document.createElement("td");
//         let td_conser = document.createElement("td");
//         let td_opc = document.createElement("td");
//         let a_ver = document.createElement("a");
//         let a_edit = document.createElement("a");
//         let a_delete = document.createElement("a");
//         let a_pdf = document.createElement("a");
//         let i_ver = document.createElement("i");
//         let i_edit = document.createElement("i");
//         let i_delete = document.createElement("i");
//         let i_pdf = document.createElement("i");

//         td_opc.className = "bg-darkgreen-icon d-none d-lg-block";
//         i_ver.className = "fas fa-eye m-2";
//         i_edit.className = "fas fa-edit m-2";
//         i_delete.className = "fas fa-trash-alt m-2";
//         i_pdf.className = "fas fa-print m-2";

//         th_id.textContent = index;
//         td_codlpp.textContent = docData.CODIGO_LPP;
//         td_conpresp.textContent = docData.CONPRESP;
//         td_lpp.textContent = docData.LPP;
//         td_preser.textContent = docData.PRESERVACAO;
//         td_conser.textContent = docData.CONSERVACAO;

//         //agregando el id para cada elemento de crud
//         a_ver.setAttribute("data-id", doc.id);
//         a_edit.setAttribute("data-id", doc.id);
//         a_delete.setAttribute("data-id", doc.id);
//         a_pdf.setAttribute("data-id", doc.id);

//         //agregando data-toggle y data-table para abrir modal
//         a_ver.setAttribute("data-toggle", "modal");
//         a_ver.setAttribute("data-target", ".pruebaModal");
//         a_edit.setAttribute("data-toggle", "modal");
//         a_edit.setAttribute("data-target", "#");
//         a_delete.setAttribute("data-toggle", "modal");
//         a_delete.setAttribute("data-target", "#");
//         a_pdf.setAttribute("data-toggle", "modal");
//         a_pdf.setAttribute("data-target", "#");

//         //agregando direccionamiento a etiqueta a
//         a_ver.href = "/usuarios.html";
//         a_edit.href = "";
//         a_delete.href = "";
//         a_pdf.href = "";

//         //agregando los tr a la tabla
//         tr.appendChild(th_id);
//         tr.appendChild(td_codlpp);
//         tr.appendChild(td_conpresp);
//         tr.appendChild(td_lpp);
//         tr.appendChild(td_preser);
//         tr.appendChild(td_conser);
//         tr.appendChild(td_opc);
//         //add las opciones crud
//         td_opc.appendChild(a_ver);
//         td_opc.appendChild(a_edit);
//         td_opc.appendChild(a_delete);
//         td_opc.appendChild(a_pdf);
//         //add icons i in td
//         a_ver.appendChild(i_ver);
//         a_edit.appendChild(i_edit);
//         a_delete.appendChild(i_delete);
//         a_pdf.appendChild(i_pdf);

//         tbodyList.appendChild(tr);

//         index++;
//       });
//     });
// });

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
