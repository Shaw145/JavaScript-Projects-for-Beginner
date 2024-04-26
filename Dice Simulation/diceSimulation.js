const roll = document.querySelector('#roll');
const sum = document.querySelector('#sum');
const dices = document.querySelector('.dices');

const dice1 = dices.firstElementChild;
const dice2 = dices.lastElementChild;

roll.addEventListener('click', ()=>{
    let random1 = Math.floor(Math.random()*6) + 1;
    let random2 = Math.floor(Math.random()*6) + 1;

    rotate(random1,random2);

})

function rotate(random1, random2){

    dice1.classList.add('animate');
    dice2.classList.add('animate');

    setTimeout(()=>{
        dice1.src = `images/dice${random1}.png`;
        dice2.src = `images/dice${random2}.png`;
        dice1.classList.remove('animate');
        dice2.classList.remove('animate');

        sum.textContent = random1+random2;
    },2000);

}
