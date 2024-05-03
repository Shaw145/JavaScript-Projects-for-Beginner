const nameError = document.querySelector("#name-error");
const phError = document.querySelector("#ph-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");


function validateName(){
    const name = document.querySelector("#name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePh(){
    const ph = document.querySelector("#ph").value;

    if(ph.length == 0){
        phError.innerHTML = "Phone No is required";
        return false;
    }
    if(ph.length != 10){
        phError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if(!ph.match(/^[0-9]{10}$/)){
        phError.innerHTML = "Only digits please";
        return false;
    }
    phError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    const email = document.querySelector("#email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    const message = document.querySelector("#message").value;

    const required = 10;
    const left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + "more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePh() || !validateMessage()){

        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the errors to submit";
        setTimeout(()=>{
            submitError.style.display = 'none';
        },3000)
        return false;
    }
}