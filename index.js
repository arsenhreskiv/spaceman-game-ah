// declare word
// split word into letters
// prompt used to input a letter
// compare picked letter to see if it matches any or the word letters
// if picked letter matches word letter, reveal it
// else put out 1 of 6 body parts (subtract 1 from 6)
// text input box and button
// guessing whole word ends game
// if letter is equal to 

let word = "space"
let body = 10
let playerPick = prompt('Type a letter:')

const split = word.split('')
let correctLetters = []
let incorrectLetter =[]
console.log(split)

function init() {

}

function checkLetter(){
    
if (word.includes(playerPick)){
    for (let i = 0; i < split.length; i++){
        if (playerPick === split[i]){
            console.log(`the letter ${playerPick} is in space number: ${i+1}`)
            correctLetters = playerPick
            //change background of letter so it is visible
        }else {
            console.log(`the letter is not in index ${i+1}`)
        }
    }
}else {
    checkBodyNum(playerPick)
}
 playerPick = prompt('Type a letter:')
 loops()
}

function checkBodyNum (x) {
    console.log(incorrectLetter)
    incorrectLetter.push(x)
    body--
    if (body == 0){
        return true
    } else {
        return false
    }
}

function loops() {
    while (checkBodyNum() !== true || correctLetters == split) {
        checkLetter()
    }
}

function winner() {
    if (correctLetters){

    }
}