const form = document.querySelector ('.section-form_div-form');
const fName = document.querySelector ('.fName');
const lName = document.querySelector ('.lName');
const email = document.querySelector ('.email');
const pass = document.querySelector ('.password');
const button = document.querySelector ('.section-form_div-form_button');

const divErrorFName = document.querySelector ('.div-error-fname');
const divErrorLName = document.querySelector ('.div-error-lname');
const divErrorPass = document.querySelector ('.div-error-pass');
const divErrorEmail = document.querySelector ('.div-error-email');



button.addEventListener("click", (event)=> {
    event.preventDefault();
    validate(fName.value, fName, divErrorFName);
    validate(lName.value, lName, divErrorLName);
    validate(pass.value, pass, divErrorPass);
    validateEmail(email.value, email, divErrorEmail);
});

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(valueInput) == true){
        hideError(divInput, divError);
    } else {
        showError(divInput, divError);
    }
}

function validate(valueInput, divInput, divError) {
    if (valueInput.length == 0) {
        showError(divInput, divError);
    } else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError){
    divInput.classList.toggle("input-active");
    divError.classList.toggle ("active");
}

function hideError(divInput, divError){
    divInput.classList.remove("input-active");
    divError.classList.remove ("active");
}
