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
let wordHolder = document.getElementById('omega')
let correctGuess = document.createElement('ul')
let pGuess = document.createElement('li')
buttonEl.addEventListener('click', checkLetter)

init()
function init() {
 board()
}
// get words and number of lives to show to be @ MVP
function checkLetter(){
    document.getElementById("lives").innerHTML = `Lives Remaining: ${lives}`
    playerPick = document.getElementById("playerPick").value;
    //console.log(playerPick)
    if (word.includes(playerPick)){
        //console.log('includes-letter')
        if (!checkGuess(playerPick)){
            let listItems = document.querySelectorAll('.list-item')
            //console.log(listItems)
            console.log(correctLetters)
            listItems.forEach(function(item){
                //console.log(item.getAttribute('value'))
                if (item.getAttribute('value') === playerPick.toLowerCase()){
                    //console.log('Item Value')
                    item.innerHTML = playerPick
                    correctLetters.push(playerPick)
                    //winner()
                }
            })
            // for (let i = 0; i < split.length; i++){
            //     if (playerPick === split[i]){
            //         console.log(`the letter ${playerPick} is in space number: ${i+1}`)
            //         correctLetters.push(playerPick)
            //         //change background of letter so it is visible
            //     }
            // }
            //console.log(correctLetters)
        }
    }else {
        if (!wrongGuessCheck(playerPick)){
            checkLivesNum(playerPick)
            //loser()
        }
    }
    //console.log(correctLetters)
    loops()
    }


function board() {
    document.getElementById("lives").innerHTML = `Lives Remaining: ${lives}`;
for (let i = 0; i < split.length; i++){
    let spaceDiv = document.createElement('li')
    spaceDiv.setAttribute('class', 'list-item')
    spaceDiv.setAttribute('value', split[i])
    //console.log(spaceDiv.getAttribute('value'))
    if (split[i] === "-") {
        spaceDiv.innerHTML = "-";
    } else {
        spaceDiv.innerHTML = "_";
        }
        correctGuess.appendChild(spaceDiv);
        wordHolder.appendChild(correctGuess);
        
}
}
function loops() {
    //console.log(correctLetters.length, split.length)
    //if (lives !== 0  || correctLetters.length !== split.length) {
    if (correctLetters.length === split.length) {
        return winner()
        
    }else if (lives === 0){
        return loser()
    }else{
       //console.log('still running...')
    }
}

// 
function checkLivesNum (wrong) {
    //console.log(incorrectLetter)
    incorrectLetter.push(wrong)
    lives--
    //let text = incorrectLetter.toString()
    document.getElementById("demo").innerHTML = incorrectLetter.toString();
    //console.log(lives)
}

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
        return true
    } return false
}
// function winner for if player guesses the correct word, then say congratulations and end game
function winner() {
    if (correctLetters.length === split.length){
        // output a message saying congratulations, you won
        console.log('Congratulations, you won!')
        document.getElementById("end-text").innerHTML = "Congratulations, you won!"
    }
}

// make a loser function for when the player loses all of their lives you output YOU LOST and end game.
function loser() {
    if (lives === 0) {
        // outputs message saying player lost
        console.log('you lost hehe')
        document.getElementById("end-text").innerHTML = "Uh-oh, Looks Like You Lost :("
    }
}

// function to reset game
// function restart(true) {
//     if (true) init()
// }