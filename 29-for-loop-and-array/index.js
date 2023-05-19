let sentence= ["hello ","my ","name ","is ","joy"]
let greetingEl = document.getElementById("greeting-el")

//render the sentence in the greetingEl paragraph using a for loop and .textContent

for(let i= 0; i<  sentence.length; i++){
  greetingEl.textContent += sentence[i] + " " 
}