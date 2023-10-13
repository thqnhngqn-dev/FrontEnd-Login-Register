//methods and events click form Register
function displayRegister() {
    document.getElementById("mySignup").addEventListener("click", function() {
        window.location.href = "Register.html";
    });
}
// methods and events click form Login
function displayLogin(){
    document.getElementById('myLogin').addEventListener("click", function(){
        window.location.href = 'Login.html';
    });
}

function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/addUser', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      username: username,
      password: password
    }));
  }