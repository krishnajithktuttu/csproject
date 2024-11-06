// Stopwatch Variables
let stopwatchTime = 0;
let stopwatchInterval;

// Countdown Timer Variables
let countdownTime = 0;
let countdownInterval;

// Function to format time as HH:MM:SS
function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Update the display
function updateDisplay(time) {
    document.getElementById('timer-display').textContent = formatTime(time);
}

// Stopwatch Functions
function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateDisplay(stopwatchTime);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    updateDisplay(stopwatchTime);
}

// Countdown Functions
function startCountdown() {
    const input = document.getElementById('countdown-input').value;
    if (input && input > 0) {
        countdownTime = parseInt(input);
        updateDisplay(countdownTime);

        countdownInterval = setInterval(() => {
            countdownTime--;
            updateDisplay(countdownTime);

            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}

function resetCountdown() {
    stopCountdown();
    countdownTime = 0;
    updateDisplay(countdownTime);
}

// Event Listeners
document.getElementById("start-stopwatch").addEventListener("click", startStopwatch);
document.getElementById("stop-stopwatch").addEventListener("click", stopStopwatch);
document.getElementById("reset-stopwatch").addEventListener("click", resetStopwatch);

document.getElementById("start-countdown").addEventListener("click", startCountdown);
document.getElementById("stop-countdown").addEventListener("click", stopCountdown);
document.getElementById("reset-countdown").addEventListener("click", resetCountdown);
