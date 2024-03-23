let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let restart =  document.getElementById("restart");
let add = document.getElementById("add");

let hourTime = 0;
let minuteTime = 0;
let secondTime = 0;

var timer;

start.onclick = function(){
    clearInterval(timer)
    timer = setInterval(startTimer, 1000)
}

pause.onclick = function(){
    clearInterval(timer)
}

restart.onclick = function(){
    clearInterval(timer)
    secondTime = 0;
    minuteTime = 5;
    hourTime = 0;
    updateText()
}

add.onclick = function (){
    secondTime += 10
    updateText()
}


function startTimer(){
    if(secondTime != 0){
        secondTime -= 1;
    }
    else if ( minuteTime != 0){
        minuteTime -= 1;
        secondTime = 59;
    }
    else if (hourTime != 0){
        hourTime -= 1;
        minuteTime = 59;
        secondTime = 59;
    }
    updateText()
}

function fixTimer(){
    if(hour < 10){
        hour.textContent = "0" + hourTime ;
    }
    if (minute < 10){
        minute.textContent = "0" + minuteTime;
    }
    if(second < 10){
        second.textContent = "0"+ secondTime;
    }
}

function handleTime(){
    if(secondTime > 59){
        secondTime = 0;
        minuteTime += 1 ;
    }
    if (minuteTime > 59){
        minuteTime = 0;
        hourTime += 1 ;
    }
}

function updateText(){
    handleTime()
    hour.textContent = hourTime;
    minute.textContent = minuteTime;
    second.textContent = secondTime;
    fixTimer()
}

