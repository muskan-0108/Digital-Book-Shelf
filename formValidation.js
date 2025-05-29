 
document.getElementById('myForm').addEventListener('submit', function (event) 
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errors = [];

    if (!nameRegex.test(name)) {
        errors.push('Invalid name. Only letters and spaces are allowed.');
    }

    if (!emailRegex.test(email)) {
        errors.push('Invalid email address.');
    }

    if (address.trim() === '') {
        errors.push('Address cannot be empty.');
    }

    if (phone.trim() === '' || isNaN(phone) || phone.length !== 10) {
        errors.push('Invalid phone number. Please enter a 10-digit number.');
    }

    if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        displayErrors(errors);
    }
});

/*
function displayErrors(errors) {
    var errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';

    errors.forEach(function (error) {
        var errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorContainer.appendChild(errorMessage);
    });

    var form = document.getElementById('myForm');
    form.appendChild(errorContainer); */
}
 