let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard +6 //23

if (sum < 20 ){
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21){
  console.log("whooo! you've  got Blackjack! 🥳")
  hasBlackJack = true
}else {
  console.log("You are out of the game! 😭")// ans  
}