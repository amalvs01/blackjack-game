let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 4

//write the conditional  according to these rules:

//if less than or equal to 20 ->"do you want to draw a new card? 🙂"
//else if exactly 21  ->"whooo! you've Blackjack! 🥳"
//else                 ->"You are out of the game! 😭"

if (sum <= 20 ){
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21){
  console.log("whooo! you've  got Blackjack! 🥳")
  hasBlackJack = true
}else {
  console.log("You are out of the game! 😭")// ans  
}
