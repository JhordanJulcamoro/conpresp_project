// const codigoList = document.querySelector("#codigoList");
// const conprespList = document.querySelector("#conprespList");
// const lppList = document.querySelector("#lppList");
// const preservacaoList = document.querySelector("#preservacaoList");
// const conservacaoList = document.querySelector("#conservacaoList");
// const trList = document.querySelector("#trList");
// const idList = document.querySelector("#idList");
const tbodyList = document.querySelector("#tbodyList");
$(document).ready(function () {
  tbodyList.innerHTML = "";
  let index = 1;
  db.collection("conpresp_v1")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // console.log(doc.data());
        // conservacaoList.textContent = doc.data().CONPRESP;
        const docData = doc.data();
        let tr = document.createElement("tr");
        let th_id = document.createElement("th");
        let td_codlpp = document.createElement("td");
        let td_conpresp = document.createElement("td");
        let td_lpp = document.createElement("td");
        let td_preser = document.createElement("td");
        let td_conser = document.createElement("td");
        let td_opc = document.createElement("td");
        let a_ver = document.createElement("a");
        let a_edit = document.createElement("a");
        let a_delete = document.createElement("a");
        let a_pdf = document.createElement("a");
        let i_ver = document.createElement("i");
        let i_edit = document.createElement("i");
        let i_delete = document.createElement("i");
        let i_pdf = document.createElement("i");

        td_opc.className = "bg-darkgreen-icon d-none d-lg-block";
        i_ver.className = "fas fa-eye m-2";
        i_edit.className = "fas fa-edit m-2";
        i_delete.className = "fas fa-trash-alt m-2";
        i_pdf.className = "fas fa-print m-2";

        th_id.textContent = index;
        td_codlpp.textContent = docData.CODIGO_LPP;
        td_conpresp.textContent = docData.CONPRESP;
        td_lpp.textContent = docData.LPP;
        td_preser.textContent = docData.PRESERVACAO;
        td_conser.textContent = docData.CONSERVACAO;

        //agregando el id para cada elemento de crud
        a_ver.setAttribute("data-id", doc.id);
        a_edit.setAttribute("data-id", doc.id);
        a_delete.setAttribute("data-id", doc.id);
        a_pdf.setAttribute("data-id", doc.id);

        //agregando data-toggle y data-table para abrir modal
        a_ver.setAttribute("data-toggle", "modal");
        a_ver.setAttribute("data-target", ".pruebaModal");
        a_edit.setAttribute("data-toggle", "modal");
        a_edit.setAttribute("data-target", "#");
        a_delete.setAttribute("data-toggle", "modal");
        a_delete.setAttribute("data-target", "#");
        a_pdf.setAttribute("data-toggle", "modal");
        a_pdf.setAttribute("data-target", "#");

        //agregando direccionamiento a etiqueta a
        a_ver.href = "/usuarios.html";
        a_edit.href = "";
        a_delete.href = "";
        a_pdf.href = "";

        //agregando los tr a la tabla
        tr.appendChild(th_id);
        tr.appendChild(td_codlpp);
        tr.appendChild(td_conpresp);
        tr.appendChild(td_lpp);
        tr.appendChild(td_preser);
        tr.appendChild(td_conser);
        tr.appendChild(td_opc);
        //add las opciones crud
        td_opc.appendChild(a_ver);
        td_opc.appendChild(a_edit);
        td_opc.appendChild(a_delete);
        td_opc.appendChild(a_pdf);
        //add icons i in td
        a_ver.appendChild(i_ver);
        a_edit.appendChild(i_edit);
        a_delete.appendChild(i_delete);
        a_pdf.appendChild(i_pdf);

        tbodyList.appendChild(tr);

        // docData.id = doc.id;
        // tbodyList.innerHTML += `<tr>
        // <th scope="row">${index}</th>
        // <td>${docData.CODIGO_LPP}</td>
        // <td>${docData.CONPRESP}</td>
        // <td>${docData.LPP}</td>
        // <td>${docData.PRESERVACAO}</td>
        // <td>${docData.CONSERVACAO}</td>
        // <td>
        // <button class="btn btn-danger btn-deletar" data-id="${docData.id}">Deletar</button>
        // <button class="btn btn-warning btn-editar">Editar</button>
        // </td>
        // </tr>
        // `;
        index++;
      });
    });
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
