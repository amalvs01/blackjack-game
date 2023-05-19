let firstCard = 10
let secondCard = 11 
let sum = firstCard + secondCard 
let hasBlackJack = false
//1.create  a variable called isAlive and assing it to true
  let isAlive = true 
//2.Flip its value to false in the  appropriate code block

if (sum < 20 ){
  console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21){
  console.log("whooo! you've got  Blackjack! 🥳")
  hasBlackJack = true
}else {
  console.log("You are out of the game! 😭")
  isAlive= false

}
//3.log it out to check that you're doing it right
console.log(isAlive)

