const errMsg = document.getElementById('errorDisplay')
const form = document.getElementById("registration");
form.addEventListener("submit", validate);
/**
 * Registration Form - Username Validation:
 * 
 * The username cannot be blank.->html
 * The username must be at least four characters long.--html
 * The username must contain at least two unique characters. --isUernameUnqueValid()
 * The username cannot contain any special characters or whitespace. --isUsernameValid
 * 
 */

const username = form.elements["username"];

function validate(event) {
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