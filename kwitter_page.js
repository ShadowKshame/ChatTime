//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDMuRcrKXQLGHJTK8LoanbmyTH3DZ8EtWI",
      authDomain: "kwitter-950d3.firebaseapp.com",
      databaseURL: "https://kwitter-950d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-950d3",
      storageBucket: "kwitter-950d3.appspot.com",
      messagingSenderId: "406631898626",
      appId: "1:406631898626:web:cd0d2bc97b19989bba911b"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}