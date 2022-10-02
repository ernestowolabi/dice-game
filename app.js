let player1Score = 0
let player2Score = 0
let player1Turn = true


const player1Dice = document.getElementById("player1-dice")
const player2Dice = document.getElementById("player2-dice")
const player1ScoreBoard = document.getElementById("player1scoreboard")
const player2ScoreBoard = document.getElementById("player2scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("roll-btn")
const resetBtn = document.getElementById("reset-btn")


rollBtn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 6)+ 1
  console.log(randomNumber)

    if (player1Turn) {
      player1Score += randomNumber
      player1Dice.textContent = randomNumber
      player1Dice.classList.remove("active")
      player2Dice.classList.add("active")
      message.textContent = "Player 2's turn" 
      player1ScoreBoard.textContent = player1Score 

    } else {
      player2Score += randomNumber
      player2Dice.textContent = randomNumber
      player2Dice.classList.remove("active")
      player1Dice.classList.add("active")
      message.textContent = "Player 1's turn"
      player2ScoreBoard.textContent = player2Score

    }
  player1Turn = !player1Turn

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳"
    showResetBtn()

  } else if (player2Score >= 20) { 
    message.textContent = "Player 2 has won! 🥳"
    showResetBtn()

  }
})


function showResetBtn() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}

resetBtn.addEventListener("click", reset) 

function reset() {
  player1Dice.textContent = "-"
  player2Dice.textContent = "-"
  player1ScoreBoard.textContent = 0
  player2ScoreBoard.textContent = 0
  message.textContent = "Player 1's turn"
  rollBtn.style.display = "block"
  resetBtn.style.display = "none"
  player1Score = 0
  player2Score = 0 
  player1Turn = true
  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")

}





