//*******************************************************************************************************************
// rollDice()
// Function's purpose – to generate a random value between 1 and 6
// Input – number of sides
// Output – random number between 1 and the number of sides
//*******************************************************************************************************************
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
  }
   
  for (var i = 0; i < 100; i++) {
    console.log(rollDice());
  }