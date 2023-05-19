let firstCard = 10
let secondCard = 6
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
//1.declare  a variable called isAlive and assing it to true
let message = ""
//2.reassign  the  message variable to the string we're logging out

if (sum < 20 ){
  message = "Do you want to draw a new card? 🙂"
} else if (sum === 21){
  message = "whooo! you've got Blackjack! 🥳"
  hasBlackJack = true
}else {
  message = "You are out of the game! 😭"
  isAlive= false

}
//3.log it out 
console.log(message)

