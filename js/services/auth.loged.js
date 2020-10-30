auth.onAuthStateChanged((user) => {
  if (user) {
    //   window.location = "home.html"; //If User is not logged in, redirect to login page
    var uid = user.uid;
    console.log(uid);
  } else {
    window.location = "login.html";
  }
});
