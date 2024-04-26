const img = document.querySelector('.images img')
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const text = document.querySelector("#total_images");

let totalImages = 11;
let current = 1;

text.textContent = `${current}/${totalImages}`;

prev.addEventListener('click',()=>{

    if(current<=1){
        current = totalImages + 1;
    }

    current--;
    img.src = `images/pic${current}.jpg`;
    text.textContent = `${current}/${totalImages}`;
})

next.addEventListener('click',()=>{

    if(current>=totalImages){
        current = 0;
    }
    
    current++;
    img.src = `images/pic${current}.jpg`;
    text.textContent = `${current}/${totalImages}`;
})
