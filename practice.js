// build a timer logic
class Clock { // created an object constructor that will have an object that starts at g iven time and decrements time
    constructor() {
        this.clock = {
            seconds: 5
        }
        console.log(this.clock.seconds);
    }
    startTime() {
        this.clock.seconds--;
        this.ourDisplay();
        if (this.clock.seconds <= 0) { // stops at 1, we need it to go to 0s
            promptPop() // add prompt code
        }
    }
    ourDisplay() {
        const display = document.getElementById('clock-display');
        display.innerHTML = this.clock.seconds;
    }
}

let newClock = new Clock; // changed to let b/c we are going to reassign in prompt functions
setInterval(function() {newClock.startTime()}, 1000);
console.log(newClock);
    
// DOM parts of clock
const clockContainer = document.createElement('div') // creating a div
clockContainer.id = 'clock-display'; // add an id to the div
document.body.appendChild(clockContainer) // appending our div container to the body of the doc

// need to structure
    //Name of Timer
    //Actual Timer
// an event that prompts when the timer is done
// this part needs to be able to rerun our timer and also give a yes or no prompt, if yes show piece of plant
function promptPop () {
    // check if vaue of minutes and secods is strictly equal to 0
    if (newClock.clock.seconds === 0 /*&& newClock.clock.minutes === 0*/) {
         //if so throw prompt : di
        //and run function drink
        alert("It's time for you to hydrate!");
         return drink();
    }
}
function drink() {
    //check if input mathes to yes
    let hydration = prompt("Did you have at least 12oz of water?");
        // if so enlarge photo of plant
    if (/[A-Za-z]/.test(hydration) && hydration.toLowerCase() === 'yes'){
        // thrown alert like good job
        alert("Great, it'll help you focus!")
        // and restart timer funtion
        newClock = new Clock;
        return startTime;
    } else {
        alert('You should think about choices you make.');
        newClock = new Clock;
        return startTime;
    }
        
}

// if no re run timmer only
// append this timer to the document
