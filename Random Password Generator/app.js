const passwordbox = document.querySelector("#password");
const copy = document.querySelector("#copy");
const btn = document.querySelector("#btn");

const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "@#%!$&_/|~";

const allChar = upperCase + lowerCase + number + special;

btn.addEventListener("click", ()=>{
    let password = "";

    //First 4 letters (Optional)
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += special[Math.floor(Math.random()* special.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random()* allChar.length)];
    }

    passwordbox.value = password;
})

copy.addEventListener("click", ()=>{
    passwordbox.select(); //This is just to make a visual effect
    navigator.clipboard.writeText(passwordbox.value); //This is the real deal
})