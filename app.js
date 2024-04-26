function clock(){
    var today = new Date();
    
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";
//set the time period am/pm
    if (hours >= 12){
        period = "PM";
    }
// set the 12 hour clock format
hours = hours > 12 ? hours % 12 : hours;

// add the 0 for values lower than 10 

if (hours < 10){
    hours = "0" + hours;
}
if (minutes < 10){
    minutes = "0" + minutes;
}
if (seconds < 10){
    seconds = "0" + seconds;
}

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;

}
var updateClock = setInterval(clock, 1000);

//Get the date in js
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleDateString('default', {weekday: 'long'});
const MonthName = today.toLocaleDateString('default', {month: 'short'});

document.querySelector(".month-name").innerHTML = MonthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".year").innerHTML = year;
document.querySelector(".day-number").innerHTML = dayNumber ;
