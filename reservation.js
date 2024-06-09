const form = document.getElementById('reservation-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
    validateForm();
    if (!isFormValid()) {
        event.preventDefault();
    } else {
        window.location.href = "confirmation.html"
    }
});

function isFormValid() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim(); 

    return (firstNameValue !== '' && lastNameValue !== '' && emailValue !== '');
}

function validateForm() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

    if (firstNameValue === '') {
        alert("Veuillez saisir votre prénom.");
    }

    if (lastNameValue === '') {
        alert("Veuillez saisir votre nom.");
    }

    if (emailValue === '') {
        alert("Veuillez saisir votre adresse mail.");
    }
}
