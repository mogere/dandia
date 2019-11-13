//Name and password from register form
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");

//storing input from register form
function store() {
    //store data from register form
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("password", inputPassword.value)
}
// check if stored data from register-form is equal to entered data in the   login-form
function check() {
    // stored data from the register-form
    var storedEmail = localStorage.getItem("inputEmail");
    var storedPassword = localStorage.getItem("inputPassword");
    //enterred data from login form
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword")

    // Check if stored data from the register form is equal to the one entered on the log in form
    if (userEmail.value === storedEmail && userPassword.value === storedPassword) {
        alert('You are loged in.');
    } else {
        alert('ERROR.');
    }
}