"use strict";



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNav);

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate all fields
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    //const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const idNumber = document.getElementById('id-number').value;
    const uploadId = document.getElementById('upload-id').value;
    const cellNumber = document.getElementById('cell-number').value;
    const streetNumber = document.getElementById('street-number').value;
    const streetName = document.getElementById('street-name').value;
    const city = document.getElementById('city').value;
    const suburb = document.getElementById('suburb').value;
    const postalCode = document.getElementById('postal-code').value;
    const country = document.getElementById('country').value;
    

    if (!firstName || !lastName || !email || !password || !gender || !idNumber || !uploadId || !cellNumber || !streetNumber || !streetName || !city || !suburb || !postalCode || !country) {
        alert('Please fill out all fields.');
        return;
    }

    // If all fields are valid, submit the form
    alert('Registration successful!');
    this.submit();
});