let player1Time = 102
let player2Time = 105

function getFastRaceTime(){
  if (player1Time < player2Time){
    return player1Time
  }else if (player2Time < player1Time) {
    return player2Time
  }else{
    return player1Time
  }
}

// let fasterRace = getFastRaceTime()
// console.log()

function getTotalRaceTime(){
  return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)