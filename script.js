let errorFlag = false;

let onSubmit = () => {
    const form = document.getElementById("form");

    const fnElement = document.getElementById("first-name");
    const firstName = fnElement.value;
    const fnameError = document.getElementById("fname-error")

    const lnElement = document.getElementById("last-name");
    const lastName = lnElement.value;
    const lnameError = document.getElementById("lname-error");

    const emailElement = document.getElementById("email");
    const email = emailElement.value;
    const emailError = document.getElementById("email-error");

    const passwordElement = document.getElementById("password")
    const password = passwordElement.value;
    const passwordError = document.getElementById("password-error");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!firstName) {
            fnameError.innerHTML = "First Name cannot be empty";
            addErrorClass(fnElement);
        }
        else clearError(fnameError, fnElement);

        if (!lastName) {
            lnameError.innerHTML = "Last Name cannot be empty";
            addErrorClass(lnElement);
        }
        else clearError(lnameError, lnElement);

        if (!validateEmail(email)) {
            emailError.innerHTML = "Looks like this is not an email";
            addErrorClass(emailElement);
        }
        else clearError(emailError, emailElement);

        if (!password) {
            passwordError.innerHTML = "Password cannot be empty";
            addErrorClass(passwordElement);
        }
        else clearError(passwordError, passwordElement);

        if (!errorFlag) {
            alert("Thank you for signing up!");

            clearFields([fnElement, lnElement, emailElement, passwordElement]);

            window.location.reload();
        }
    })
}

let addErrorClass = (inputElement) => {
    inputElement.classList.add("error-border");
    errorFlag = true;
}

let clearError = (errorMsg, inputElement) => {
    inputElement.classList.remove("error-border");
    errorMsg.innerHTML = '';
    errorFlag = false;
}

let validateEmail = (input) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(mailFormat))
        return true;
    else
        return false;
}

let clearFields = (array) => {
    array.forEach((element) => {
        element.value = '';
    });
}