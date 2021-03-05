// Select html via css properties
const dateItem = document.querySelector('.date');
const timeItem = document.querySelector('.time');


// Update date and time every second
setInterval(() => {
    let date = new Date();
    dateItem.textContent = date.toDateString();
    timeItem.textContent = date.toLocaleTimeString();
}, 1000);