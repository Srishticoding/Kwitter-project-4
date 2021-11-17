// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqax25l2v2dL35GM-xIaQ_l90sO_ae8Cw",
    authDomain: "tic-tac-toe-b444f.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-b444f-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-b444f",
    storageBucket: "tic-tac-toe-b444f.appspot.com",
    messagingSenderId: "717230442269",
    appId: "1:717230442269:web:a68e6e94135248a7e003f4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();