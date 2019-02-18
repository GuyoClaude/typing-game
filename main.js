window.addEventListener('load', init);

//Globals

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};
// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'batch',
    'bunch',
    'bundle',
    'cluster',
    'design',
    'display',
    'host',
    'lineup',
    'lot',
    'multitude',
    'pattern',
    'supply',
    'arrangement',
    'body',
    'clump',
    'disposition',
    'exhibition',
    'formation',
    'order',
    'parade',
    'set',
    'show',
    'throng',
    'clothe',
    'costume',
    'decorate',
    'embellish',
    'equip',
    'furnish',
    'outfit',
    'rig'

];

//Initialize Game
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //Start Matching word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//Start Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1 display zero
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

//Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}



//Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];

}

//Countdown Timer
function countdown() {
    // Make sure the time is not run out
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
    //Check status
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!';
        score = -1;
    }

}