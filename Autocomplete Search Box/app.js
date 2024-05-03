const inputBox = document.querySelector("#search-box");
const searchItems = document.querySelector(".search-items");

let keywords = [
    "HTML",
    "CSS",
    "Easy Tutorial",
    "Web design tutorials",
    "Javascript",
    "Where to learn coding online",
    "Where to learn web design",
    "How to create a website"
];

inputBox.addEventListener("input", ()=>{
   
    let result = [];
    const input = inputBox.value;

    if(input.length){
        result = keywords.filter((key)=>{
            return key.toLowerCase().includes(input.toLowerCase());
        })
    }

    display(result);

    if(!result.length){
        searchItems.innerHTML = "";
    }

})

function display(result){
    const content = result.map((list)=>{
        return "<li onclick = selectInput(this)>" + list + "</li>";
    })
    searchItems.innerHTML = '<ul>' + content.join("") + '</ul>';
}   

function selectInput(list){
    inputBox.value = list.innerHTML;
    searchItems.innerHTML = ""
}