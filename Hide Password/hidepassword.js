const closeEye = document.querySelector(".bx");
const password = document.querySelector("#password");

let eye = false;

closeEye.addEventListener("click", ()=>{

    eye = !eye; //******************** */

    if(eye){ //if(password.type == 'password'){
        closeEye.classList.replace("bx-show", "bx-low-vision");
        password.setAttribute("type", "text");
	//password.type = 'text';
        // eye = true;
    }
    else{
        closeEye.classList.replace("bx-low-vision", "bx-show");
        password.setAttribute("type", "password");
	//password.type = 'password';
        // eye = false;
    }

})