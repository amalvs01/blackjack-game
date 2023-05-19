let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let  hasBlackJack = false 

if (sum < 20 ){
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21){
  console.log("whooo! you've  got Blackjack! 🥳")
  hasBlackJack = true
}else {
  console.log("You are out of the game! 😭")

}
//CASHOUT! 
console.log(hasBlackJack)