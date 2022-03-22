let count = 0;
let intervalId = null;
let startBtn = document.getElementById("start");
let result = document.getElementById('result');

function startTimer(){
        startBtn.disabled = true;
        intervalId = setInterval( ()=> {
                count++;
                let seconds = (count % 60);
                let minutes = parseInt((count/60)% 60);
                let hours = parseInt(count/3600);

                if(seconds < 10){
                        seconds = "0" + seconds;
                }
                if(minutes < 10){
                        minutes = "0" + minutes;
                }
                if(hours < 10){
                        hours = "0" + hours;
                }

                result.innerHTML = hours + ":" + minutes + ":" + seconds ;
        },1000 )
}

function stopTimer(){
        clearInterval(intervalId);
        startBtn.removeAttribute("disabled");
}

function resetTimer(){
        clearInterval(intervalId);
        count = 0;
        result.innerHTML = "00:00:00";
        startBtn.removeAttribute("disabled");
}

function restartTimer(){
        clearInterval(intervalId);
        count = 0;
        startTimer();
}