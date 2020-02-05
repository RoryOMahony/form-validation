// Blur event listeners - fired when the input has lost focus

document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zipcode").addEventListener("blur", validateZipcode);
document.getElementById("email").addEventListener("blur", validateEmail);
document
  .getElementById("phoneNumber")
  .addEventListener("blur", validatePhoneNumber);

// event handlers

// - letters between a and z
// - capital or lowercase
// - between 2 and 10 letters
function validateName() {
  const input = document.getElementById("name");
  const regex = /^[a-zA-Z]{2,10}$/i;
  validate(input, regex);
}

// US Zip Codes
// - 5 numbers
// - optional "-<4 more numbers>"
function validateZipcode() {
  const input = document.getElementById("zipcode");
  const regex = /^\d{5}(-\d{4})?$/i;
  validate(input, regex);
}

// something.something@something.com or .co.uk
function validateEmail() {
  const input = document.getElementById("email");
  // any letter, number, - or ., one or more times
  // then an @ symbol
  // then any letter, number, - or ., one or more times
  // then a .
  // ends with max of 5 letters or .
  // this could be improved further (e.g. .co.co.uk is considered valid when it should not be)
  const regex = /^([a-zA-Z\d\-.]+)@([a-zA-Z\d\-.]+)\.([a-zA-Z.]{1,5})$/i;
  validate(input, regex);
}

// (123) 456 789
// (123)456 789
// (123)456789
// 123456789
// 123-456-789
// 123 456789
// 123456 789
function validatePhoneNumber() {
  const input = document.getElementById("phoneNumber");
  const regex = /^\(?\d{3}\)?[ -]?\d{3}[ -]?\d{3}$/i;
  validate(input, regex);
}

function validate(input, regex) {
  if (regex.test(input.value)) {
    input.classList.remove("is-invalid");
  } else {
    input.classList.add("is-invalid");
  }
}
