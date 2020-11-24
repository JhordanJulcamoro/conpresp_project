const loginForm = document.querySelector("#loginForm");
const resetPasswordForm = document.querySelector("#resetpasswordForm");
const btnVerificarEmail = document.querySelector("#btnVerificarEmail");
const btnLogout = document.querySelector(".btnLogout");
const agregarUsuarioForm = document.querySelector("#agregarUsuarioModal");
const tbodyList = document.querySelector("#tbodyList");
const h1TituloCadastro = document.querySelector(".nombre-titulo");
const h6SubtituloCadastro = document.querySelector(".nombre-subtitulo");
//DECLARE VARIABLES FOR DATABASE-FIRESTORE
let name_table_db = "conpresp_v1";
let name_table_db2 = "conpresp_v2";

// ICONS FOR USING IN TABLE
const iconoVer = "<i class='fas fa-eye'></i>";
const iconoEditar = "<i class='fas fa-edit'></i>";
const iconoEliminar = "<i class='fas fa-trash-alt'></i>";
const iconoPdf = "<i class='fas fa-print'></i>";

let content_buttons =
  "<div class='wrapper text-center'><div class='btn-group'><button class='btnVer btn btn-info' data-toggle='tooltip' title='Ver'>" +
  iconoVer +
  "</button><button class='btnEditar btn btn-warning' data-toggle='tooltip' title='Editar'>" +
  iconoEditar +
  "</button><button class='btnPdf btn btn-success' data-toggle='tooltip' title='Pdf'>" +
  iconoPdf +
  "</button></button></div></div>";

// DECLARE CONST FOR USING IN DATA TABLE - HOME
var dataSet = [];
let filaEditada;
