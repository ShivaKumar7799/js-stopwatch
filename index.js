let count = 0;
let intervalId = null;
let startBtn = document.getElementById("start");
let result = document.getElementById('result');

function startTimer(){
        startBtn.disabled = true;
        intervalId = setInterval( ()=> {
                count++;
                        result.innerHTML = Number.parseInt(count/60) + ":" + count % 60;
        },1000 )
}

function stopTimer(){
        clearInterval(intervalId);
        startBtn.removeAttribute("disabled");

}

function resetTimer(){
        clearInterval(intervalId);
        count = 0;
        result.innerHTML = "00:00";
        startBtn.removeAttribute("disabled");
}

function restartTimer(){
        clearInterval(intervalId);
        count = 0;
        startTimer();
}