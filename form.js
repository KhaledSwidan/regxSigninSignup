let nameInput = document.getElementById("text");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let invalidSpan = document.querySelector("span");
let btn = document.getElementById("btn");

let data = []; 

if (localStorage.getItem("Data List") != null)
{ data = JSON.parse(localStorage.getItem("Data List")) };

function signUp()
{
    if (signUpValidat()) {
        let currData = {
            name: nameInput.value,
            email: emailInput.value,
            password: passInput.value
        }
        data.push(currData);
        localStorage.setItem("Data List", JSON.stringify(data));
    } else {
        invalidSpan.style.setProperty("display", "block");
        btn.removeAttribute("href");
    }
}
btn.addEventListener("click", signUp);

// function signUp()
// {
//     if (signUpValidat()) {
//         let currData = {
//             name: nameInput.value,
//             email: emailInput.value,
//             password: passInput.value
//         }
//         if (data.get("email") === currData.email)
//         {
//             return alert("This email is already registered with us.");
//         } else {
//             data.push(currData);
//             localStorage.setItem("Data List", JSON.stringify(data));
//         }
//     } else {
//         invalidSpan.style.setProperty("display", "block");
//         btn.removeAttribute("href");
//     }
// }

function signUpValidat()
{
    let passRegx = /^[0-9]{4,9}$/;
    let emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (passRegx.test(passInput.value) && emailRegx.test(emailInput.value))
    { return true } else { return false };
}


function sin()
{
    let passRegx = data.name;
    let emailRegx = data.email;
    let nameRegx = data.password;
}