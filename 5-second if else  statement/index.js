//check  if the  person is elegible for a birthday card from the King!(100)

let age = 100

//if else than 100     ->" not elegible"
//else if exactly 100  ->"Here  is your  birthday card ferom the king!"
//else                 ->"notelegible , you have already gotten one"

if (age < 100) {
  console.log("not elegible")
}else if (age === 100){ // if "100" is console as "100" bcz its a string.this value is not working
  console.log("Here is  your birthday card from the King")
}else{
  console.log("Not elegible, you have already gotten one")
}