const timer = document.querySelector('.timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let interval;
let startTime = 0;



function updateTimer() {
    const currentTime = new Date().getTime() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor(currentTime % 1000);
    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

startBtn.addEventListener('click', () => {
    startBtn.classList.add('active');
    stopBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    startTime = new Date().getTime() - (startTime ? startTime : 0);
    interval = setInterval(updateTimer, 10);
});

stopBtn.addEventListener('click', () => {
    startBtn.classList.remove('active');
    stopBtn.classList.add('active');
    resetBtn.classList.remove('active');
    clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    startBtn.classList.remove('active');
    stopBtn.classList.remove('active');
    resetBtn.classList.add('active');
    clearInterval(interval);
    timer.textContent = '00:00:00:00';
    startTime = 0;

    
});

updateTimer(); // Initialize timer display
