function loginUsuario(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.replace("home.html");
    })
    .catch((error) => {
      alert("Ocurrió el siguiente error: " + error.message);
      $(".loading-icon").addClass("d-none");
      $(".button").attr("disabled", false);
      $(".btn-txt").text("Iniciar sessão");
    });
}

function logoutUsuario() {
  auth
    .signOut()
    .then(function () {
      window.location.replace("login.html");
    })
    .catch(function (error) {
      alert(error);
    });
}

function resetPassword(email) {
  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      $("#resetPasswordModal").modal("hide");
      console.log("se envió el mensaje de reset");
    })
    .catch(function (error) {
      alert(error);
    });
}

async function cadastrarUsuario(user) {
  const creds = await auth.createUserWithEmailAndPassword(
    user.email,
    user.password
  );
  await enviarVerificacaoEmail();
  return db.collection("users").doc(creds.user.uid).set({
    name: user.name,
    email: user.email,
    tipoUsuario: user.tipoUsuario,
    estadoUsario: user.estadoUsario,
  });
}

async function dataPorId(id) {
  return await db.collection(name_table_db).doc(id).get();
}

async function llenaDataEdit(id) {
  try {
    let doc = await dataPorId(id);
    setValuesForm(doc);
  } catch (error) {
    alert(error.message);
  }
}

function setValuesForm(doc) {
  let d = doc.data();
  $("#codigo-lpp").val(d.CODIGO_LPP);
  $("#name-lpp").val(d.LPP);
  $("#grupo-tipo-equipe").val(d.GLPPP);
  $("#numero-bem").val("PRUEBA");
  $("#denomicacao-bem").val("PRUEBA");
  $("#denomicacoes-complementares-bem").val("PRUEBA");
  $("#numero-bens-item").val("PRUEBA");
  $("#grupo-tipo-bem").val("Natural");
  $("#grupo-recorte-tematico").val("Cinemas, Conservatórios e Teatros");
  $("#grupo-propiedade").val("Pública Municipal");
  $("#grupo-uso-original").val("Outros");
  $("#grupo-pavimentos-original").val("Serviços");
  $("#grupo-terreo-atual").val("Industrial");
  $("#grupo-pavimentos-atual").val("Funerário");
  $("#uso-observacoes").val("PRUEBA");
  $("#resolucao-tombamento").val("PRUEBA");
  $("#relacionadas-tombamento").val("PRUEBA");
  $("#resolucao-condephaat").val("PRUEBA");
  $("#relacionadas-condephaat").val("PRUEBA");
  $("#resolucao-iphan").val("PRUEBA");
  $("#relacionadas-iphan").val("PRUEBA");
  $("#cb-apt").attr("checked", true); //TENER CUIDADO CON LOS DATOS INGRESADOS, SI ES TEXTO IGUAL SE ACTIVA
  $("#cb-teo").attr("checked", true);
  $("#cb-t").attr("checked", true);
  $("#cb-ticp").attr("checked", true);
  $("#cb-apc").attr("checked", true);
  $("#cb-bir").attr("checked", true);
  $("#cb-aue").attr("checked", true);
  $("#cb-app").attr("checked", true);
  $("#grupo-tipo-imoveis").val("JARDIM");
  $("#grupo-tipo-titulo").val("ADVOGADO");
  $("#input-logradouro").val("ADVOGADO");
  $("#numero-atual").val("PRUEBA");
  $("#endereco-completo").val("PRUEBA");
  $("#grupo-tipo-distrito").val("Tucuruvi");
  $("#grupo-prefeitura-regional").val("Butantã");
  $("#grupo-tipo-antigo").val("LAGOA");
  $("#grupo-titulo-antigo").val("AGRIC");
  $("#logradouro-antigo").val("PRUEBA");
  $("#numero-antigo").val("PRUEBA");
  $("#grau-tombamento").val("PRUEBA");
  $("#numero-condominio").val("PRUEBA");
  $("#input-dac").val("DAC PRUEB");
  $("#input-lote").val("LOTE 1231");
  $("#input-quadra").val("PRA 12345");
  $("#input-setor").val("ASAS 12345");
  $("#input-autor").val("PRUEBA");
  $("#input-constructor").val("PRUEBA");
  $("#periodo-construcao").val("PRUEBA");
  $("#grupo-arquitetonico-primario").val("Colonial");
  $("#grupo-arquitectonico-secundario").val("Neocolonial");
  $("#estilo-arquitectonico-observacoes").val("PRUEBA");
  $("#tecnica-constructiva-primaria").val("Adobe");
  $("#grupo-constructiva-secundaria").val("Taipa-de-pilão");
  $("#tecnica-construtiva-observacoes").val("PRUEBA");
  $("#numero-pavimentos").val("PRUEBA");
  $("#cb-terreo").attr("checked", true);
  $("#cb-porao").attr("checked", true);
  $("#observacoes-pavimentos").val("PRUEBA");
  $("#informacoes-historicas").val("PRUEBA");
  $("#analise-arquitectonica").val("PRUEBA");
  $("#descricao-ambiencia").val("PRUEBA");
  $("#outras-informacoes").val("PRUEBA");
  $("#grupo-estado-preservacao").val("PRUEBA");
  $("#descripcao-estado-preservacao").val("PRUEBA");
  $("#grupo-estado-conservacao").val("PRUEBA");
  $("#descipcao-estado-conservacao").val("PRUEBA");
  $("#fontes-bibliograficas").val("PRUEBA");
}

function getValuesForm() {
  let data = {
    codigo_lpp: $("#codigo-lpp").val(),
    name_lpp: $("#name-lpp").val(),
    codigo_lpp: $("#codigo-lpp").val(),
    name_lpp: $("#name-lpp").val(),
    grupo_tipo_equipe: $("#grupo-tipo-equipe").val(),
    numero_bem: $("#numero-bem").val(),
    denomicacao_bem: $("#denomicacao-bem").val(),
    denomicacoes_complementares_bem: $(
      "#denomicacoes-complementares-bem"
    ).val(),
    numero_bens_item: $("#numero-bens-item").val(),
    grupo_tipo_bem: $("#grupo-tipo-bem").val(),
    grupo_recorte_tematico: $("#grupo-recorte-tematico").val(),
    grupo_propiedade: $("#grupo-propiedade").val(),
    grupo_uso_original: $("#grupo-uso-original").val(),
    grupo_pavimentos_original: $("#grupo-pavimentos-original").val(),
    grupo_terreo_atual: $("#grupo-terreo-atual").val(),
    grupo_pavimentos_atual: $("#grupo-pavimentos-atual").val(),
    uso_observacoes: $("#uso-observacoes").val(),
    resolucao_tombamento: $("#resolucao-tombamento").val(),
    relacionadas_tombamento: $("#relacionadas-tombamento").val(),
    resolucao_condephaat: $("#resolucao-condephaat").val(),
    relacionadas_condephaat: $("#relacionadas-condephaat").val(),
    resolucao_iphan: $("#resolucao-iphan").val(),
    relacionadas_iphan: $("#relacionadas-iphan").val(),
    cb_apt: $("#cb-apt").val(),
    cb_teo: $("#cb-teo").val(),
    cb_t: $("#cb-t").val(),
    cb_ticp: $("#cb-ticp").val(),
    cb_apc: $("#cb-apc").val(),
    cb_bir: $("#cb-bir").val(),
    cb_aue: $("#cb-aue").val(),
    cb_app: $("#cb-app").val(),
    grupo_ipo_imoveis: $("#grupo-tipo-imoveis").val(),
    grupo_tipo_titulo: $("#grupo-tipo-titulo").val(),
    logradouro: $("#input-logradouro").val(),
    numero_atual: $("#numero-atual").val(),
    endereco_completo: $("#endereco-completo").val(),
    grupo_tipo_distrito: $("#grupo-tipo-distrito").val(),
    grupo_prefeitura_regional: $("#grupo-prefeitura-regional").val(),
    grupo_tipo_antigo: $("#grupo-tipo-antigo").val(),
    grupo_titulo_antigo: $("#grupo-titulo-antigo").val(),
    logradouro_antigo: $("#logradouro-antigo").val(),
    numero_antigo: $("#numero-antigo").val(),
    grau_tombamento: $("#grau-tombamento").val(),
    numero_condominio: $("#numero-condominio").val(),
    dac: $("#input-dac").val(),
    lote: $("#input-lote").val(),
    quadra: $("#input-quadra").val(),
    setor: $("#input-setor").val(),
    autor: $("#input-autor").val(),
    constructor: $("#input-constructor").val(),
    periodo_construcao: $("#periodo-construcao").val(),
    grupo_arquitetonico_primario: $("#grupo-arquitetonico-primario").val(),
    grupo_arquitectonico_secundario: $(
      "#grupo-arquitectonico-secundario"
    ).val(),
    estilo_arquitectonico_observacoes: $(
      "#estilo-arquitectonico-observacoes"
    ).val(),
    tecnica_constructiva_primaria: $("#tecnica-constructiva-primaria").val(),
    grupo_constructiva_secundaria: $("#grupo-constructiva-secundaria").val(),
    tecnica_construtiva_observacoes: $(
      "#tecnica-construtiva-observacoes"
    ).val(),
    numero_pavimentos: $("#numero-pavimentos").val(),
    cb_terreo: $("#cb-terreo").val(),
    cb_porao: $("#cb-porao").val(),
    observacoes_pavimentos: $("#observacoes-pavimentos").val(),
    informacoes_historicas: $("#informacoes-historicas").val(),
    analise_arquitectonica: $("#analise-arquitectonica").val(),
    descricao_ambiencia: $("#descricao-ambiencia").val(),
    outras_informacoes: $("#outras-informacoes").val(),
    grupo_estado_preservacao: $("#grupo-estado-preservacao").val(),
    descripcao_estado_preservacao: $("#descripcao-estado-preservacao").val(),
    grupo_estado_conservacao: $("#grupo-estado-conservacao").val(),
    descipcao_estado_conservacao: $("#descipcao-estado-conservacao").val(),
    fontes_bibliograficas: $("#fontes-bibliograficas").val(),
  };
  console.log(data);
}
// function dataPorId(id) {
//   db.collection(name_table_db)
//     .doc(id)
//     .get()
//     .then(function (doc) {
//       if (doc.exists) {
//         return doc.data();
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch(function (error) {
//       alert(error);
//     });
// }

function enviarVerificacaoEmail() {
  try {
    return auth.currentUser.sendEmailVerification();
  } catch (error) {
    alert(error);
  }
}

function listarDatosTabla() {
  db.collection(name_table_db)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        var coleccionData = doc.data();
        dataSet = [
          doc.id,
          coleccionData.CONPRESP,
          coleccionData.DENOMINACIONES,
          coleccionData.PRESERVACAO,
          coleccionData.CONSERVACAO,
        ];
        table.rows.add([dataSet]).draw();
      });
    });
}

function cadastrarPrenchimento(data) {
  db.collection(name_table_db)
    .add({
      CODIGO_LPP: data.CODIGO_LPP,
      CONPRESP: data.CONPRESP,
      LPP: data.LPP,
    })
    .then(function () {
      console.log("Document successfully saved!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });
}

// function actualizarDataFireStore(usuario) {
//   fs.collection("users")
//     .add({
//       nomes: usuario.nomes, //string
//       sobrenomes: usuario.sobrenomes, //string
//       email: usuario.email, //string
//       password: usuario.password, //string
//       nivelUsuario: usuario.nivelUsuario, //int (1-Global,2-Usuario medio,3-Usuario general)
//       estadoUsuario: usuario.estadoUsuario, //Boolean (true-activo,false-inactivo)
//       fotoUsuario: usuario.fotoUsuario,
//     })
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });
// }
