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
