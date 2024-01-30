const errMsg = document.getElementById('errorDisplay')
const form = document.getElementById("registration");
const username = form.elements["username"];
const email = form.elements["email"]


form.addEventListener("submit", validate);
function validate(event) {

    /**
     * Registration Form - Username Validation:
     * The username cannot be blank.->html
     * The username must be at least four characters long.--html
     * The username must contain at least two unique characters. --isUernameUnqueValid()
     * The username cannot contain any special characters or whitespace. --isUsernameValid()
     */
    const nameUnqiu = isUsernameUnqiueValid();
    if (!nameUnqiu) {
        event.preventDefault();
        errMsg.innerText = "Username must contain at least two unique characters";
        errMsg.style.display = 'block';
        errMsgTimeout(errMsg);
        return false;
    }

    const nameval = isUsernameValid()
    if (!nameval) {
        event.preventDefault();
        errMsg.innerText = "Username cannot contain any special characters or whitespace";
        errMsg.style.display = 'block';
        errMsgTimeout(errMsg);
        return false;
    }

    /**
     * Registration Form - Email Validation: 
     * The email must be a valid email address. --isEmailValid()
     * The email must not be from the domain "example.com." --isEmailDomainValid() 
     */

    const emailval = isEmailValid()
    if (!isEmailValid()) {
        event.preventDefault();
        errMsg.innerText = "Email must be a valid email address";
        errMsg.style.display = 'block';
        errMsgTimeout(errMsg);
        return false;
    }

    const emailDomainVal = isEmailDomainValid()
    if (!isEmailDomainValid()) {
        event.preventDefault();
        errMsg.innerText = `The email must not be from the domain "example.com."`;
        errMsg.style.display = 'block';
        errMsgTimeout(errMsg);
        return false;
    }
}

//Timeout function for errMeg box
function errMsgTimeout(errMsg) {
    setTimeout(function () {
        errMsg.style.display = 'none';
    }, 2000);
}

//The username must contain at least two unique characters.
function isUsernameUnqiueValid() {
    //Covert the string to an array of characters
    const characters = Array.from(username.value);
    //Create a set of unique characters from the array of characters using the Set()
    const uniqueCharacters = new Set(characters);
    //Return true if the set contains at least two unique characters
    return uniqueCharacters.size >= 2;
}

//The username cannot contain any special characters or whitespace.
function isUsernameValid() {
    // Check if the username contains any special characters or whitespace
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialCharacters.test(username.value) || /\s/.test(username.value)) {
        return false;
    }
    return true
}

//The email must be a valid email address.
function isEmailValid() {
    // Check if the email is a valid email address using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.value)) {
        return false;
    }
    return true;
}

//The email must not be from the domain "example.com."
function isEmailDomainValid() {
    // Check if the email is from the domain "example.com."
    const emailDomain = email.value.split("@")[1];
    if (emailDomain === "example.com") {
        return false;
    }
    return true;
}