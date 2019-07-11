/*======================================================================================================================
   Name: Darien Cortez
   Date Created: 07/10/2019
   Most recent revision: 07/11/2019
  =====================================================================================================================*/
  
// Function's purpose – to generate a random value between 1 and 6
// Input – number of sides
// Output – random number between 1 and the number of sides
function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    return dice1 + dice2;
  }


// Function's purpose - reset form fields to their natural state
// Input - none
// Output - none
function clearErrors() {    
      if (document.forms["luckysevens"]["startingBet"].parentElement.className.indexOf("has-error") != -1) {
          document.forms["luckysevens"]["startingBet"].parentElement.className = "container col-6";
        }
  }    


// Function's purpose - clear all fields in the <form>
// Input - none
// Output - none
function resetForm() {
  clearErrors();
  document.forms["luckysevens"]["startingBet"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("submitButton").style.display = "inline"
  document.forms["lucksevens"]["startingBet"].focus(); //makes the cursor active here
}


// Function's purpose - plays the game
// Input - none
// Output - none
function play() {
  clearErrors();
  var startingBet = document.forms["luckysevens"]["startingBet"].value;
  var currentAmount = startingBet;
  //keeps track of the max amount of money and its corresponding number of rolls held by a player in one game
  var rollCount = 0; 
  var highestRollCount = rollCount;
  var highestAmountWon = currentAmount;

  //isNaN (is not a number)
  if (startingBet == "" || isNaN(startingBet) || startingBet < 0 || startingBet > 20) 
  {
      alert("Starting bet must be between 0 and 20.00.");
      document.forms["luckysevens"]["startingBet"].parentElement.className = "container col-6 has-error";
      document.forms["luckysevens"]["startingBet"].focus();
  }

  else{
    while(currentAmount > 0)
    {
      rollCount++; 
      var diceAmount = rollDice();
      
      if(diceAmount == 7){
        currentAmount = currentAmount + 4;
      }
      else{
        currentAmount--;
      }
      
      if(highestAmountWon<=currentAmount){
        highestAmountWon = currentAmount;
        highestRollCount = rollCount;
      }    
    }
      
    document.getElementById("results").style.display = "block";
    document.getElementById("resetButton").style.display = "inline";
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("startingBet").innerText = startingBet;
    document.getElementById("rollCount").innerText = rollCount;
    document.getElementById("highestAmountWon").innerText = highestAmountWon;
    //displays zero if no amount of rolls gave a higher amount for the player than the starting bet
    document.getElementById("highestRollCount").innerText = highestRollCount; 
    return false; // allows us to see the table
  }
}
