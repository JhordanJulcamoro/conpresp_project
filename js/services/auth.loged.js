auth.onAuthStateChanged(async (user) => {
  if (user) {
    const userDB = await getUserCollectionDB(user);
    setUserName(user.displayNome, userDB.nome);
  } else {
    window.location = "login.html";
  }
});

async function getUserCollectionDB(user) {
  const userCollection = (
    await db.collection("users").doc(user.uid).get()
  ).data();
  return userCollection;
}

function setUserName(displayNome, nomeDB) {
  if (displayNome == "undefined") {
    document.getElementById("userName").innerHTML = displayNome;
  } else {
    document.getElementById("userName").innerHTML = nomeDB;
  }
}
