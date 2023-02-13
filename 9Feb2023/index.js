if (localStorage.getItem("users") == null) {
    localStorage.setItem('users', JSON.stringify([]));
}

function register() {

    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    var user = {
        username: username,
        password: password,
        email: email
    }

    var usersArr = JSON.parse(localStorage.getItem("users"));
    usersArr.push(user);
    localStorage.setItem("users", JSON.stringify(usersArr));

}

function login() {

    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var usersArr = JSON.parse(localStorage.getItem("users"));

    var isUserRegistered = false;
    var isUserLoginSuccess = false;

    usersArr.forEach(function (user) {
        if (user.username == username) {
            isUserRegistered = true;

            if (user.password == password) {
                isUserLoginSuccess = true;
            }
            else {
                isUserLoginSuccess = false;
            }

        }

    })

    if (isUserRegistered == false) {
        alert("user is not registered")
        return;
    }
    if (isUserLoginSuccess) {
        alert("login success");
    }
    else {
        alert("login failure");
    }

}