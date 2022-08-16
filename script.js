
//Submit Button
function Verify() {
  var userRef = "Priyankap";
  var passRef = "Priyanka@123";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
  alert("connection")
  } else {
  alert("It's seem you made a mistake.")
  }
};