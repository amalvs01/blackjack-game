let firstCard = 10
let secondCard = 4
let cards= [firstCard ,secondCard]//array-- ordered list of items
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")  // or ---> let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function start() {
    renderGame()
  }

function renderGame(){

  cardsEl.textContent = "cards: "+ cards[0] + " " + cards[1] // card(0index)
  sumEl.textContent ="Sum: " + sum 
  if (sum <= 20 ){
    message = "Do you want to draw a new card?"
  } else if (sum === 21){
    message = "You've  got Blackjack!"
    hasBlackJack = true
  }else {
    message = "You are out of the game!"
    isAlive= false
  } 
  messageEl.textContent = message
}

function newCard(){
let card = 6
 sum += card
 cards.push(card)
 console.log(cards)
 renderGame()
}