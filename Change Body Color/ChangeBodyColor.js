const input = document.querySelector("#color");
const body = document.body

input.addEventListener("input", ()=>{
    const color = input.value;
    body.style.backgroundColor = color;
})