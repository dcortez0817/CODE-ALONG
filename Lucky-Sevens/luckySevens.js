/*======================================================================================================================
   Name: Darien Cortez
   Date Created: 07/10/2019
   Most recent revision:
  =====================================================================================================================*/


// rollDice()
// Function's purpose – to generate a random value between 1 and 6
// Input – number of sides
// Output – random number between 1 and the number of sides
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

// clearErrors()
// Function's purpose - reset form fields to their natural state
// Input - none
// Output - none
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 