const num1=document.getElementById()function validateAndSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const genderElements = document.getElementsByName('gender');
    const country = document.getElementById('country').value;
    const termsAccepted = document.getElementById('terms').checked;

    let gender = '';
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const genderError = document.getElementById('genderError');
    const countryError = document.getElementById('countryError');
    const termsError = document.getElementById('termsError');

    nameError.innerText = '';
    emailError.innerText = '';
    passwordError.innerText = '';
    genderError.innerText = '';
    countryError.innerText = '';
    termsError.innerText = '';

    let isValid = true;

    if (!name) {
        nameError.innerText = 'Full Name is required.';
        isValid = false;
    }

    if (!email) {
        emailError.innerText = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerText = 'Invalid email format.';
        isValid = false;
    }

    if (!password) {
        passwordError.innerText = 'Password is required.';
        isValid = false;
    }

    if (!gender) {
        genderError.innerText = 'Please select a gender.';
        isValid = false;
    }

    if (!country) {
        countryError.innerText = 'Please select a country.';
        isValid = false;
    }

    if (!termsAccepted) {
        termsError.innerText = 'You must agree to the terms.';
        isValid = false;
    }

    if (isValid) {
        document.body.innerHTML = `
            <div class="container">
                <h2>Registration Successful!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Country:</strong> ${country}</p>
                <button onclick="window.location.reload()">Register Again</button>
            </div>
        `;
    }
}
