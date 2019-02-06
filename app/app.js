

let rock = 'rock'
let scissors = 'scissors'
let paper = 'paper'

let cChoices = {
  rock: 'Rock',
  paper: 'Paper',
  scissors: 'Scissors'
}

var playerScore = 0;
var computerScore = 0;


function play(playersChoice) {
  let compPlay = compChoice()
  if (playersChoice == rock) {
    if (compPlay == 'rock') {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="tied"><i class="far fa-dot-circle"></i></h1> It's a draw!`
    } else if (compPlay == 'paper') {
      computerScore++;
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="lost"><i class="far fa-times-circle"></i></h1> You lost!`
    } else {
      playerScore++;
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="won"><i class="far fa-check-circle"></i></h1> You won!`
    }
  } else if (playersChoice == paper) {
    if (compPlay == 'rock') {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="won"><i class="far fa-check-circle"></i></h1> You win!`
    } else if (compPlay == 'paper') {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="tied"><i class="far fa-dot-circle"></i></h1> It's a draw!`
    } else {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="lost"><i class="far fa-times-circle"></i></h1> You lost!`
    }
  } else if (playersChoice == scissors) {
    if (compPlay == 'rock') {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="lost"><i class="far fa-times-circle"></i></h1> You lost!`
    } else if (compPlay == 'paper') {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="won"><i class="far fa-check-circle"></i></h1> You win!`
    } else {
      document.getElementById('result').innerHTML = `You played <b>${playersChoice}</b>, the computer played <b>${compPlay}</b>. <h1 class="tied"><i class="far fa-dot-circle"></i></h1> It's a draw!`
    }
  }
  updateScores()
}


function compChoice() {
  let choices = Object.keys(cChoices)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let compPlay = choices[choiceIndex]
  return compPlay
}

function updateScores() {
  document.getElementById('score').innerHTML = `Your score is <b>${playerScore}</b>. The computer's score is <b>${computerScore}</b>.`
}








//***** my own notes *********/


// function play(playersChoice) {
//   let compPlay = compChoice()
//   document.getElementById('result').innerHTML = `You played ${playersChoice}, the computer played ${compPlay}`
// }


// function compChoice() {
//   let choices = Object.keys(cChoices) //object.keys returns the initial properties of object
//   let choiceIndex = Math.floor(Math.random() * choices.length) //mathFloor cuts off decimals. math Random gives a random number between 0 and the length of the choice arrary
//   let compPlay = choices[choiceIndex]
//   return compPlay
// }

