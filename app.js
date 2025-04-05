const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let duration = 25 * 60;
let timeLeft = duration;
let timerInterval = null;
let isRunning = false;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Pomodoro complete! 🎉");
            isRunning = false;
            timeLeft = duration;
            updateDisplay();
            return;
        }
        timeLeft--;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    timeLeft = duration;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
