const inputs = document.querySelectorAll('.controls input');

inputs.forEach((inp)=>{
    inp.addEventListener('change',(e)=>{
        let variable = e.target.name;
        let value = e.target.value;

        document.documentElement.style.setProperty(`--${variable}`, `${value}px`);
    })
})