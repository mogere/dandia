var users = [{
  username : "Kolum",
  email:"kolumronnie@gmail.com",
  password : "12345"
},
{
  username : "Tichi",
  email:"tichi@gmail.com",
  password : "54321"
}
]
function getInfo(){
  
  var email = document.getElementById("defaultForm-email").value;
  
  var password = document.getElementById("defaultForm-pass").value;
  var newPassword = localStorage.getItem(email);
    if(email != null && password == newPassword){
      alert(email + " is logged in");
      event.preventDefault();
      window.location.href = "book.html";
      
      return
    }
    
  
  alert("Wrong username or password");
}
function User(username,email,password){
  this.username = username;
  this.email = email;
  this.password = password;

}
function signUp(){
  
  var email = document.getElementById("orangeForm-email").value;
  var password = document.getElementById("orangeForm-pass").value;
  // var username = document.getElementById("orangeForm-name").value;
  var newEmail = localStorage.getItem(email);
  if (newEmail != null){
    alert("user " + email + "already registered. kindly register using another email");
  }
  else{
    localStorage.setItem(email,password);
    event.preventDefault();
    window.location.href = "book.html";
    return
  }
  event.preventDefault();
  window.location.href = "index.html";
};