const form = document.querySelector(".form");
const fullName = document.querySelector("#full_name");
const fullNameError = document.querySelector("#fullname_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message_error");
const feedback = document.querySelector(".feedback");

function validateFullName(event) {
    event.preventDefault();
    if (checkLength(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }
}
function validateMessage(event) {
    event.preventDefault();
    if (checkLength(message.value, 20) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
}
function validateEmailField(event) {
    event.preventDefault();
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

fullName.addEventListener("blur", validateFullName);
message.addEventListener("blur", validateMessage);
email.addEventListener("blur", validateEmailField);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function submitForm(event) {
    event.preventDefault();
    feedback.innerHTML = '<div class="feedback">Your message has been sent!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);
