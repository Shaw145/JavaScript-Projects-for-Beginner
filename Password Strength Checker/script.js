const password = document.querySelector("#password");
const strength = document.querySelector("#strength");
const inputBox = document.querySelector(".input-box");
const text = document.querySelector("#text");



password.addEventListener("input", ()=>{

    if(password.value.length > 0){
        text.style.display = "block";
    }
    else{
        text.style.display = "none";
    }

    if(password.value.length < 5 && password.value.length > 0){
        text.style.color = "#ff5925";
        inputBox.style.borderColor = "#ff5925";
        strength.textContent = "weak";
        strength.style.color = "#ff5925";
    }
    else if(password.value.length >= 5 && password.value.length < 8){
        strength.textContent = "medium";
        text.style.color = "yellow";
        inputBox.style.borderColor = "yellow";
        strength.style.color = "yellow";
    }
    else if(password.value.length >= 8){
        strength.textContent = "strong";
        text.style.color = "#26d730";
        inputBox.style.borderColor = "#26d730";
        strength.style.color = "#26d730";
    }
    else{
        inputBox.style.borderColor = "white";
    }
})