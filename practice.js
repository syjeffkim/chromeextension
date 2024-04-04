// build a timer logic
// build a cache for pictures

class Clock { // created an object constructor that will have an object that starts at g iven time and decrements time
    constructor() {
        this.clock = {
            seconds: 5
        }
        //console.log(this.clock.seconds);
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
const intervalID = setInterval(function() {newClock.startTime()}, 1000);
    
// DOM parts of clock
const clockContainer = document.createElement('div') // creating a div
clockContainer.id = 'clock-display'; // add an id to the div
document.body.appendChild(clockContainer) // appending our div container to the body of the doc
// create a counter to know which picture to throw up and reassign to the src
let counter = 0;
const squirtle = document.createElement('img') // can't add the whole tag and src like in html
squirtle.setAttribute('id', 'picture1'); // must create id and img  and src separate
squirtle.setAttribute('src', 'pictures/squirtle.png')
squirtle.setAttribute('width', "100px")
squirtle.setAttribute('height', "100px")
document.body.appendChild(squirtle)
document.getElementById("picture1").style.visibility = "hidden"

const wartortle = document.createElement('img') // can't add the whole tag and src like in html
wartortle.setAttribute('id', 'picture2'); // must create id and img  and src separate
wartortle.setAttribute('src', 'pictures/wartortle.png')
wartortle.setAttribute('width', "100px")
wartortle.setAttribute('height', "100px")
document.body.appendChild(wartortle)
document.getElementById("picture2").style.visibility = "hidden"

const blastoise = document.createElement('img') // can't add the whole tag and src like in html
blastoise.setAttribute('id', 'picture3'); // must create id and img  and src separate
blastoise.setAttribute('src', 'pictures/blastoise.png')
blastoise.setAttribute('width', "100px")
blastoise.setAttribute('height', "100px")
document.body.appendChild(blastoise);

document.getElementById("picture3").style.visibility = "hidden";

// need to structure
    //Name of Timer
    //Actual Timer
// an event that prompts when the timer is done
// this part needs to be able to rerun our timer and also give a yes or no prompt, if yes show piece of plant
function promptPop () {
    // check if vaue of minutes and secods is strictly equal to 0
    if (newClock.clock.seconds === 0 /*&& newClock.clock.minutes === 0*/) {
        //and run function drink
        alert("It's time for you to hydrate!"); // added Did you drink your water?
        return drink();
    }
}

// sound function to play if they get all the way through.
function playSound() {
    let audio = new Audio('sounds/congrats.mp3')
    audio.play();
};


function drink(arg = counter) {
    //check if input mathes to yes
    let hydration = prompt("Did you have at least 12oz of water?");
    // if so enlarge photo of plant
    if (/[A-Za-z]/.test(hydration) && hydration.toLowerCase() === 'yes'){
        // thrown alert like good job
        // and restart timer funtion
        
        //if so throw prompt : and image
        // conidtional to know which picture to throw up
        if (arg === 0) {
            //console.log("bob")
            document.getElementById("picture1").style.visibility = "visible"
            alert("Great, it'll help you focus!")
        }
        if (arg === 1) {
            squirtle.src = "pictures/wartortle.png"
            //document.getElementById("picture2").style.visibility = "visible"
            alert("Great, it'll help you focus!")
        }
        if (arg === 2) {
            squirtle.src = "pictures/blastoise.png"
            //document.getElementById("picture3").style.visibility = "visible"
            alert("You did great, don't forget to use the bathroom!")
            playSound();
            clearInterval(intervalID);
        }
        console.log(arg);
        counter++;
        console.log(counter);
        newClock = new Clock;
        return newClock.startTime;
    } else {
        alert('You should think about choices you make.');
        newClock = new Clock;
        return newClock.startTime;
    }
}


// thought about creating a function for the image, might make our code more efficient
// function populateImg() {
//     const squirtle = document.createElement('img') // can't add the whole tag and src like in html
//     squirtle.setAttribute('id', 'picture'); // must create id and img  and src separate
//     squirtle.setAttribute('src', 'pictures/squirtle.png')
//     document.body.appendChild(squirtle);
//     counter++;
// }

// if no re run timmer only
// append this timer to the document
