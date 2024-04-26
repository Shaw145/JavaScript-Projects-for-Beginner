const box = document.querySelector(".box");

const dateDisplay = () =>{
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const day = d.getDay();
    const time = d.toLocaleTimeString();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    box.innerHTML = `<p id="month">${months[month]}</p>
        <p id="time">${time}</p>
        <div class="datebox">
            <p id="day">${days[day]}</p>
            <p id="date">${date}</p>
            <p id="year">${year}</p>
        </div>`;
} 

window.onload = dateDisplay;
// window.addEventListener('load', dateDisplay)