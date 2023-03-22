// declare word
// split word into letters
// prompt used to input a letter
// compare picked letter to see if it matches any or the word letters
// if picked letter matches word letter, reveal it
// else put out 1 of 6 body parts (subtract 1 from 6)
// text input box and button
// guessing whole word ends game
// if letter is equal to 

let word = "spaceman"
let lives = 10
let playerPick//= document.getElementById("playerPick").value;
let correctLetters = []
let incorrectLetter =[]

const buttonEl = document.querySelector('button');
const split = word.split('')
buttonEl.addEventListener('click', checkLetter())

function init() {

}

function checkLetter(){
    playerPick = document.getElementById("playerPick").value;
    console.log(playerPick)
if (word.includes(playerPick)){
    if (!checkGuess(playerPick) /*=== false*/){
        for (let i = 0; i < split.length; i++){
            if (playerPick === split[i]){
                console.log(`the letter ${playerPick} is in space number: ${i+1}`)
                correctLetters.push(playerPick)
                //change background of letter so it is visible
            }
        }
    }
}else {
    checkLivesNum(playerPick)
    }
    console.log(correctLetters)
    loops()
}

function loops() {
    console.log(correctLetters.length, split.length)
    //if (lives !== 0  || correctLetters.length !== split.length) {
    if (correctLetters.length === split.length) {
        console.log('Done.')
        
    }else if (lives === 0){
        console.log('Done v2')
    }else{
        console.log('still running...')
    }
}

// 
function checkLivesNum (wrong) {
    console.log(incorrectLetter)
    incorrectLetter.push(wrong)
    lives--
    //let text = incorrectLetter.toString()
    document.getElementById("demo").innerHTML = incorrectLetter.toString();
    console.log(lives)
}

// if correct letters are equal to word (don't think this is right)
// make a function checking if an input letter is already in the correctLetters array
// if it is, don't do anything, if it isn't add it
function checkGuess(playerPick) {
    if (correctLetters.includes(playerPick)){
        return true
    }else {
        return false
    }
}

//function to check if the wrong answer has been selected before
function wrongGuessCheck(playerPick) {
    if (incorrectLetter.includes(playerPick)) {

    }
}
// function winner for if player guesses the correct word, then say congratulations and end game
function winner() {
    if (correctLetters.length === split.length){
        
    }
}

// make a loser function for when the player loses all of their lives you output YOU LOST and end game.