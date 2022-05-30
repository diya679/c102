
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDCl1FvcNGs_bbaH_EGLHbO3OpajDUtDAs",
      authDomain: "kwittery-3c29e.firebaseapp.com",
      databaseURL: "https://kwittery-3c29e-default-rtdb.firebaseio.com",
      projectId: "kwittery-3c29e",
      storageBucket: "kwittery-3c29e.appspot.com",
      messagingSenderId: "203279756745",
      appId: "1:203279756745:web:4795952ec16577b0448c18"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name")
document.getElementById ("user_name").innerHTML="welcome "+user_name

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      }) ;
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;

      //End code

      });});}
getData();
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}