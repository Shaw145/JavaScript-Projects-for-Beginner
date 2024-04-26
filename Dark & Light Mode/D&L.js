
//Method - 1
const input = document.querySelector("#checkbox");
const header = document.querySelector("#header");

input.addEventListener('click', ()=>{

    document.body.classList.toggle('dark');//************************ */

    //For Changing the Text
    if(document.body.classList.contains('dark')){
        header.textContent = "Dark Mode";
    }else{
        header.textContent = "Light Mode";
    }
})



// Method - 2

// const container = document.querySelector(".container");
// const input = document.querySelector("#checkbox");

// let light = true;


// //Incase of Changing css file
// input.addEventListener("click", ()=>{
//     // console.log(input.value)
//     let theme = document.getElementsByTagName('link')[0]; 
//     if(light){
//         // console.log("Dark")
//         theme.setAttribute('href', 'dark.css'); 
//         light = false;
//     }
//     else{
//         // console.log("light")
//         theme.setAttribute('href', 'light.css'); 
//         light = true;
//     }
// })
