//var user = firebase.auth().currentUser;
console.log("ovo je js iz main");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
console.log("user", user);
$("#headerUsername").html(user.displayName);
  } else {
    // No user is signed in.
  }
});
