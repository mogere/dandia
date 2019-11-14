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
  // var username = document.getElementById("username").value;
  // alert("Your username is " + username + " and your email is " + email + " and Password is " + password)
  for(i=0;i<users.length;i++){
    
    if(email == users[i].email && password == users[i].password){
      // alert(users[i].username + " is logged in");
      event.preventDefault();
      window.location.href = "book.html";
      
      return
    }
    
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
  var username = document.getElementById("orangeForm-name").value;
  // newuser = new User(username,email,password)
  // alert(email);
  users.push(new User(username,email,password));
  localStorage.setItem()
  // alert(JSON.stringify(users));
  event.preventDefault();
  // console.log(users);
  window.location.href = "book.html";
};