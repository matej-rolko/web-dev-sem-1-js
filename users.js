document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (email === "" || username === "" || password === "") {
        alert("All fields must be filled out!")
    } else if (password.length < 8) {
       alert("Password must be at least 8 characters long!")
    } else if (username.length < 4) {
       alert("Username must be at least 4 characters long!")
    } else if (username.length > 15) {
       alert("Username must be at most 15 characters long!")
    } else if (!validateEmail(email)) {
        alert("Only CPH Business email adress can be used!")
    } else {
        alert("User " + username + " created!")
    }
});

function validateEmail(email) {
    if(email.includes("@cphbusiness.dk")) {
        return true
    } else {
        return false;
    }
}