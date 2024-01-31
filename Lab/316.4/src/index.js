const errMsg = document.getElementById("errorDisplay")
const form = document.getElementById("registration");
const username = form.elements["username"];
const email = form.elements["email"]
const password = form.elements["password"]
const passwordCheck = form.elements["passwordCheck"]


form.addEventListener("submit", validate);

function validate(event) {

    /**
     * Registration Form - Username Validation:
     * The username cannot be blank. --index. html line 4
     * The username must be at least four characters long.--index. html line 4
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
    if (!emailval) {
        event.preventDefault();
        errMsg.innerText = "Email must be a valid email address";
        errMsg.style.display = 'block';
        errMsgTimeout(errMsg);
        return false;
    }

    const emailDomainVal = isEmailDomainValid()
    if (!emailDomainVal) {
        event.preventDefault();
        errMsg.innerText = `The email must not be from the domain "example.com."`;
        errMsg.style.display = 'block';
        errMsgTimeout(errMsg);
        return false;
    }
    /**
     * Registration Form - Password Validation:
     * Passwords must be at least 12 characters long. --index.html line 33
     * Passwords must have at least one uppercase and one lowercase letter. --isPasswordValid()
     * Passwords must contain at least one number.--isPasswordNumberValid()
     * Passwords must contain at least one special character. --isPasswordSpecialCharacterValid()
     * Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).--isPasswordWordValid()
     * Passwords cannot contain the username. 
     * Both passwords must match.
     */

    const passwordVal = isPasswordValid()
    const passwordNumVal = isPasswordNumberValid()
    const passwordSpeciaCharVal = isPasswordSpecialCharacterValid()
    const passwordWordVal = isPasswordContainWord()
    const passwordUnameVal = isPasswordContainUsername()
    const passwordMatch = isPasswordMatch()



    if (!passwordVal) {
        event.preventDefault();
        errMsg.innerText = `Passwords must have at least one uppercase and one lowercase letter`;
    } else if (!passwordNumVal) {
        event.preventDefault();
        errMsg.innerText = `Passwords must contain at least one number`;
    } else if (!passwordSpeciaCharVal) {
        event.preventDefault();
        errMsg.innerText = `Passwords must contain at least one special character`;
    } else if (!passwordWordVal) {
        event.preventDefault();
        errMsg.innerText = `Passwords cannot contain the word "password"`;

    } else if (!passwordUnameVal) {
        event.preventDefault();
        errMsg.innerText = `Passwords cannot contain username`;
    } else if (passwordMatch) {
        event.preventDefault();
        errMsg.innerText = `Passwords not match`;
    }

    if (!passwordVal || !passwordNumVal || !passwordSpeciaCharVal || !passwordWordVal || !passwordUnameVal){
        errMsg.style.display = 'block';
    errMsgTimeout(errMsg);
    return false;}


/**
 * Registration Form - Terms and Conditions:
 * The terms and conditions must be accepted.
 */

const checkedTerm = isTermsAndConditionsValid() 
if (!checkedTerm) {
    event.preventDefault();
    errMsg.innerText = `The terms and conditions must be accepted`;
    errMsg.style.display = 'block';
    errMsgTimeout(errMsg);
    return false;
}
}
/**
 * 
 * Registration Form - Form Submission:
 * Valid usernames should be converted to all lowercase before being stored.
 * Valid emails should be converted to all lowercase before being stored.
 */

/**
 * 
 * Registration Form - Username Validation (Part Two):
 */



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

//Passwords must have at least one uppercase and one lowercase letter.
function isPasswordValid() {
    // Check if the password has at least one uppercase and one lowercase letter
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
    if (!passwordRegex.test(password.value)) {
        return false;
    }
    return true;
}

//Passwords must contain at least one number.
function isPasswordNumberValid() {

    // Check if the password contains at least one number
    const passwordRegex = /^(?=.*\d).{12,}$/;
    if (!passwordRegex.test(password.value)) {
        return false;
    }
    return true;
}

//Passwords must contain at least one special character.
function isPasswordSpecialCharacterValid() {
    // Check if the password contains at least one special character
    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{12,}$/;
    if (!passwordRegex.test(password.value)) {
        return false;
    }
    return true;
}

// // Passwords cannot contain the word "password" 
// function isPasswordContainWord() {
//     // Check if the password contains the word "password"
//     const passwordRegex = /^(?=.*\bpassword\b).{12,}$/;
//     if (!passwordRegex.test(password)) {
//         return false;
//     }
//     return true;
// }

//Passwords cannot contain the username input.
function isPasswordContainUsername() {
    // Check if the password contains the username
    const passwordRegex = new RegExp(`^(?=.*\\b${username}\\b).{12,}$`);
    if (!passwordRegex.test(password.value)) {
        console.log(password.value);

        return false;
    }
    return true;
}


// Both password must match
function isPasswordMatch() {
    if (!passwordCheck.value == password.value) {
        return false
    }
    return true
}


//Registration Form - Terms and Conditions:
//The terms and conditions must be accepted.
function isTermsAndConditionsValid() {
    if (!termsAndConditions.checked) {
        return false;
    }
    return true;
}