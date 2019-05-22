const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const DoBInput = document.getElementById("DOBInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneNumberInput");
const userInput = document.getElementById("userNameInput");
const doorOpen = document.getElementById("doorbutton")
const doorPic = document.getElementById("123")


doorOpen.addEventListener("click", event => {
    document.getElementById("123").style.display = "none";
})
doorPic.addEventListener("click", event => {
    document.getElementById("123").style.display = "none";
})



changeValidity = (regexVal) => {
    if (regexVal.test(event.target.value) === true) {
        event.target.setAttribute("class", "valid");
    } else {
        event.target.setAttribute("class", "invalid");
    }
}
firstLastValid = (event) => {
    let regexFirstName = /^([A-Z]|[a-z]|[-]|[']|[\s])+$/;

    if (regexFirstName.test(event.target.value) === true) {
        event.target.setAttribute("class", "valid");
    } else {
        event.target.setAttribute("class", "invalid");
    }
}


firstNameInput.addEventListener("change", firstLastValid);

lastNameInput.addEventListener("change", firstLastValid);

DoBInput.addEventListener("change", event => {
    let regexDoB = /^(\d{4}19[0-9][0-9]|200[0-1])$/;
    changeValidity(regexDoB);
});

emailInput.addEventListener("change", event => {
    let regexemail = /^[\w-]+@([\w-]+\.)+[\w-]+$/;
    changeValidity(regexemail);

});

phoneInput.addEventListener("change", event => {
    let regexphone = /^(07|01|02)[0-9]{9}$|^(\+447|\+441|\+442)[0-9]{9}$|^(00447|00441|00442)[0-9]{9}$/;
    changeValidity(regexphone);
});

userInput.addEventListener("change", event => {
    let regexUser = /^(?=(?:\D*\d){2,}\D*$)(?:[^A-Z]*[A-Z]){3,}[^A-Z]*$/gi;

    changeValidity(regexUser);

    fetch(`https://intense-coast-72655.herokuapp.com/api/users/${userInput.value}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            console.log(JSON.stringify(res));
            console.log(userInput.value);
            if (res.user !== null) {
                alert('Username Taken')

            } else {
                console.log('Not taken')
            }
        });
});


//conditional to check all inputs set to valid 
//and userInput fetch res.user == null
//then does Post to api/users with all event.target.values
//else error

doorOpen.addEventListener("change", event => {
    if (firstNameInput.classList.contains('valid')
        && lastNameInput.classList.contains('valid')
        && DoBInput.classList.contains('valid')
        && emailInput.classList.contains('valid')
        && phoneInput.classList.contains('valid')
        && userInput.classList.contains('valid')) {
        console.log("OK")
    }
})






















// fetch(`https://intense-coast-72655.herokuapp.com/api/users/`)
//     .then(function (response) {
//         return response.json();
//     }).then(function (res) {
//         console.log(JSON.stringify(res))
//     })


// // function storeUsername(event) {
//     const username = event.target(username);
// localStorage.setItem('username', username)
// }
//usernameInput.setAttribute("change", storeUsername")

// if userInput class is invalid, then don't do post request
// else post the form to the db (all values included)
// const pvalid = passwordInput.clasList.contains('valid');
// if make function that changes event.target.class validitiy

// fetch(`https://intense-coast-72655.herokuapp.com/api/users/${userInput.value}`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (res) {

//         const usersStr = JSON.stringify(res);
//         console.log(usersStr);

//         if (usersStr === { user: null }) {
//             //logic here
//             //foreach over and assign new user
//         }
//     });

//event.target something
// "userName": 