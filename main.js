const timer = {// 
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4
};
let interval;

const modeButtons = document.querySelector('#js-mode-buttons'); // not sure about buttons -
modeButtons.addEventListener('click', handleMode); // on click will activate mode

function handleMode(event) { // will handle which mode is used(short or long)
const { mode } = event.target.dataset; // we create a nested property on the event object .target.dataset
if (!mode) return;
switchMode(mode);
}

function switchMode(mode) {// will add two new properties to the timer obj
timer.mode = mode;
timer.remainingTime = {
    total: timer[mode] * 60, // time remaining in seconds
    minutes: timer[mode], 
    seconds: 0,
};

document.querySelectorAll('button[data-mode') // i belive this will switch from active timer that goes on right now to the one we are switching to
.forEach((e) => {
    e.classList.remove('active')
});
document.querySelector(`[data-mode="${mode}']`).classList.add('active') // <div class ='active'>Code</div>  toggling it on/off
document.body.style.backgroundColor = `var(--${mode})`//this is ment to change the BG color whenever we enter new class(break)

updateClock();
}

function updateClock() {
    const{ remainingTime } = timer; // creates copy of timer obj
    const minutes = `${remainingTime.minutes}`.padStart(2, '0'); // ?? need to research what padStart is
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');
    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds
}


function startTimer() {
    let { total } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;

    mainButton.dataset.action = 'stop';
    mainButton.textContent = 'stop';
    mainButton.classList.add('active');
  
    interval = setInterval(function() {
      timer.remainingTime = getRemainingTime(endTime);
      updateClock();
  
      total = timer.remainingTime.total;
      if (total <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;
  
    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);
  
    return {
      total,
      minutes,
      seconds,
    };
  }

const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
  const { action } = mainButton.dataset;
  if (action === 'start') {
    startTimer();
  }
});