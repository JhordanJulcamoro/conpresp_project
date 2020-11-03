// auth.onAuthStateChanged((user) => {
//   if (user) {
//     const userDB = getUserCollectionDB(user.uid);
//     setUserName(user.displayNome, userDB.nome);
//   } else {
//     window.location = "login.html";
//   }
// });

function getLoginFormInfo() {
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;
  return { email, password };
}

async function login(email, password) {
  return await auth.signInWithEmailAndPassword(email, password);
}

async function resetPassword(email) {
  return await auth.sendPasswordResetEmail(email);
}

function getRestPasswordInfo() {
  const email = document.querySelector("#resetpasswordEmail").value;
  return email;
}

async function logout() {
  return await auth.signOut();
}

function getCadastroFormInfo() {
  const nome = document.querySelector("#agregarUsuarioName").value;
  const sobrenome = document.querySelector("#agregarUsuarioSobrenome").value;
  const email = document.querySelector("#agregarUsuarioEmail").value;
  const password = document.querySelector("#agregarUsuarioPassword").value;
  const select = document.getElementById("agregarUsuarioSelect");
  const tipoUsuario = select.options[select.selectedIndex].value;

  const usuario = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    password: password,
    tipoUsuario: tipoUsuario,
    estadoUsario: true,
  };

  return usuario;
}

async function cadastro(usuario) {
  const creds = await auth.createUserWithEmailAndPassword(
    usuario.email,
    usuario.password
  );

  return db.collection("users").doc(creds.user.uid).set({
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    email: usuario.email,
    tipoUsuario: usuario.tipoUsuario,
    estadoUsario: usuario.estadoUsario,
    emailVerified: creds.user.emailVerified,
  });
}

// async function getUserCollectionDB(uid) {
//   const userCollection = (await db.collection("users").doc(uid).get()).data();
//   return userCollection;
// }

async function getUsersData(users) {
  let html = "";
  users.forEach((doc) => {
    const users = doc.data();
    const tr = `<tr>
    <th scope="row">1</th>
    <td>${users.email}</td>
    <td>${users.nome}</td>
    <td>${users.tipoUsuario}</td>
    <td>${users.estadoUsario}</td>
    <td><a href="">editar</a>|<a href="">eliminar</a></td>
  </tr>
    `;
    html += tr;
  });
  const usersTR = document.querySelector(".usersData");
  usersTR.innerHTML = html;
}
