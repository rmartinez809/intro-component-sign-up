let onSubmit = () => {
    const form = document.getElementById("form");


    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (firstName === '' || firstName === null) {
            element = document.getElementById("first-name");
            element.classList.remove("input-margin");
            document.getElementById("name-error").innerHTML = "First Name cannot be empty";
        }
    })
}