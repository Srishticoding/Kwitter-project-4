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
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("room name -" + Room_names);
  row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
        //End code
        });});}
  
  getData();
  
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html"
  }
  
  function logout (){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }