let timer;
let seconds = 0;
let isRunning = false;
const timerDisplay = document.querySelector('.timer');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

// mm:ss

function updateDisplay() {
    const minutes = Math.floor( seconds / 60);
    const sec = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2,'0')}`;
    //метод padStart дополнит строку '0' сначала строки. 2 - кол-во символов для заполнения
}

function starTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer); //остановили действие setInterval
    isRunning = false;
}

function resetTimer() {
    seconds = 0;
    isRunning = false;
    clearInterval(timer);
    updateDisplay();
}



start.addEventListener('click', starTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

