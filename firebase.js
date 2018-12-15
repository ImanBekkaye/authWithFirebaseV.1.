var appFirebase = {};
(function(){

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAibBMhqcWyuSIagyWRwgECI4MyUDL6ki4",
      authDomain: "authwithfirebase-1512.firebaseapp.com",
      databaseURL: "https://authwithfirebase-1512.firebaseio.com",
      projectId: "authwithfirebase-1512",
      storageBucket: "",
      messagingSenderId: "377911790436"
    };
    firebase.initializeApp(config);

    appFirebase = firebase;

})()
