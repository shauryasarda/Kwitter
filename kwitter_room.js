
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCKUxubVswy_wu8OuTZUEndhm6tvmwKklk",
      authDomain: "kwiter-a633a.firebaseapp.com",
      databaseURL: "https://kwiter-a633a-default-rtdb.firebaseio.com",
      projectId: "kwiter-a633a",
      storageBucket: "kwiter-a633a.appspot.com",
      messagingSenderId: "810516948141",
      appId: "1:810516948141:web:e5cf941f6bdb7015c11224"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
