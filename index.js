const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const DoBInput = document.getElementById("DOBInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneNumberInput");
const userInput = document.getElementById("userNameInput");

firstNameInput.addEventListener("change", event => {
  let regexFirstName = /^([A-Z]|[a-z]|[-]|[']|[\s])+$/;

  if (regexFirstName.test(firstNameInput.value) === true) {
    firstNameInput.setAttribute("class", "valid");
  } else {
    firstNameInput.setAttribute("class", "invalid");
  }
});

lastNameInput.addEventListener("change", event => {
  let regexlastName = /^([A-Z]|[a-z]|[-]|[']|[\s])+$/;

  if (regexlastName.test(lastNameInput.value) === true) {
    lastNameInput.setAttribute("class", "valid");
  } else {
    lastNameInput.setAttribute("class", "invalid");
  }
});

DoBInput.addEventListener("change", event => {
  let regexDOB = /^(\d{4}19[0-9][0-9]|200[0-1])$/;

  if (regexDOB.test(DoBInput.value) === true) {
    DoBInput.setAttribute("class", "valid");
  } else {
    DoBInput.setAttribute("class", "invalid");
  }
});

emailInput.addEventListener("change", event => {
  let regexemail = /^[\w-]+@([\w-]+\.)+[\w-]+$/;

  if (regexemail.test(emailInput.value) === true) {
    emailInput.setAttribute("class", "valid");
  } else {
    emailInput.setAttribute("class", "invalid");
  }
});

phoneInput.addEventListener("change", event => {
  let regexphone = /^(07|01|02)[0-9]{9}$|^(\+447|\+441|\+442)[0-9]{9}$|^(00447|00441|00442)[0-9]{9}$/;

  if (regexphone.test(phoneInput.value) === true) {
    phoneInput.setAttribute("class", "valid");
  } else {
    phoneInput.setAttribute("class", "invalid");
  }
});

userInput.addEventListener("change", event => {
  let regexUser = /^(?=(?:\D*\d){2,}\D*$)(?:[^A-Z]*[A-Z]){3,}[^A-Z]*$/gi;

  if (regexUser.test(userInput.value) === true) {
    userInput.setAttribute("class", "valid");
  } else {
    userInput.setAttribute("class", "invalid");
  }
});

// if userInput class is invalid, then don't do post request
// else post the form to the db (all values included)

fetch("https://intense-coast-72655.herokuapp.com/api/users/:username")
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    console.log(JSON.stringify(res));
    if (JSON.stringify(res === { user: null })) {
      //logic here
    }
  });

//event.target something
