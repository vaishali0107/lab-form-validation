// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName() {
    var name = document.getElementById("usertext").value;
    var regex = /^[a-zA-z .][^/S]{5,15}$/;
    if (regex.test(name)) {
        alert("valid username");
        return true;
    } else {
        alert("Invalid username");
        return false;
    }
}


// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    var email = document.getElementById("emailtext").value;
    var regex = /^[a-zA-Z0-9 ._]{5,}@{1}[a-zA-Z]{5,}[.]{1}[a-zA-Z]{3,}$/;
    if (regex.test(email)) {
        alert("valid Email");
        return true;
    } else {
        alert("Email is not valid");
        return false;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    var pass = document.getElementById("passwordtext").value;
    var regex = /^(?=.*[0-9])(?=.[A-Z])(?=.[!@#$%^&*()_])[a-zA-Z0-9!@#$%&*()_^]{6,20}S/;
    if (regex.test(pass)) {
        alert("valid password");
        return true;
    } else {
        alert("Password is not valid");
        return false;
    }
}