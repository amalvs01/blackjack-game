

// let randomNumber = Math.floor ( Math.random() *6 ) 

// console.log(randomNumber)

// /*
// write down  all the possible values randomNumber can hold now!

// 0,1,2,3,4,5

// */


//create a function, rollDice(), that returns a random number betm=ween 1 - 6

 function rollDice() {
   let randomNumber = Math.floor ( Math.random() *6 ) +1
   return randomNumber
 }
 console.log(rollDice())