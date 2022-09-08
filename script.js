let onSubmit = () => {
    const form = document.getElementById("form");


    const fnElement = document.getElementById("first-name");
    const firstName = fnElement.value;

    const lnElement = document.getElementById("last-name");
    const lastName = lnElement.value;

    const emElement = document.getElementById("email");
    const email = emElement.value;

    const psElement = document.getElementById("password")
    const password = psElement.value;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (firstName === '' || firstName === null) {
            document.getElementById("fname-error").innerHTML = "First Name cannot be empty";
            fnElement.classList.add("error-border");
        }

        if (lastName === '' || lastName === null) {
            document.getElementById("lname-error").innerHTML = "Last Name cannot be empty";
            lnElement.classList.add("error-border");
        }

        if (password === '' || password === null) {
            document.getElementById("password-error").innerHTML = "Password cannot be empty";
            psElement.classList.add("error-border");
        }

        if (!validateEmail(email)) {
            document.getElementById("email-error").innerHTML = "Looks like this is not an email";
            emElement.classList.add("error-border");
        }
    })
}

let validateEmail = (input) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(mailFormat))
        return true;
    else
        return false;
}