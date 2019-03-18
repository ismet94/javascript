// NEVER TRUST USER INPUT

// It is vital to validate user input before sending it to a server (and again once it arrives there, but let's take things one step at a time).

// Validation can be as simple as making sure that the type of data is correct (number vs.string, valid email address, etc.); it can also be more complex - checking for password strength, for example, or persuing a comment to amke sure it contains no URL's.

// During input

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >= 6 && $event.target.value.length <= 12) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    } 
     
});

// The input event is tripped whenever the user enters data into a given <input> element. We can use this to check data as it is entered.

// After input

// Add a blur event listener to the confirm password element.

// Compare the value properties of both inputs.

// If they are the same, set the border styles to thin solid green and set the display style of errorMsg so that it disappears

// If they are different, set the border styles to then solid red and aset the display style of errorMsf so that it appears


const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', () =>{
    if(passwordInput.value === confirmPassword.value) {
        passwordInput.style.border = 'solid green';
        confirmPassword.style.border ='solid green';
        errorMsg.style.display = 'none'; 
    } else {
        passwordInput.style.border = 'solid red';
        confirmPassword.style.border ='solid red';
        confirmPassword.setAttribute('@, $, %, !')

        errorMsg.style.display = 'inline'; 
    }
});