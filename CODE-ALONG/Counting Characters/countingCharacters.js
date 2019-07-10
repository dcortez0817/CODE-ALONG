//******************************************************************************************************************************
// countingCharacters()
// Function’s purpose - to write the count of the characters in a given string
// Input – the given string (stringToCount)
// Output – nothing
//******************************************************************************************************************************
function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + stringToCount.length + " characters.");
}

//******************************************************************************************************************************
// countingCharacters2()
// Function’s purpose – to write the count of a character in a given string
// Input – the given string (stringToCount), the character to search for (characterToFind)
// Output – nothing
//******************************************************************************************************************************
function countingCharacters2(stringToCount, characterToFind){
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    var characterCount = 0;
    for (var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}

//******************************************************************************************************************************
// countingCharacters3
// Function’s purpose – to write the count of a series of characters in a given string
// Input – the given string (str), the series of characters to search for (search)
// Output – the number of times that a series of characters appears in a given string (count)
//******************************************************************************************************************************
// str - string to search 
// search - characters to find in str 
function countingCharacters3(str, search){
    var count = 0; // number found     
    var numChars = search.length; 
        /* we need to stop loop based on multiple characters example: if searching "Ohio" with 3 characters at a time we want to
        stop at h so we do not go past the end of the string */

    var lastIndex = str.length - numChars;     
    
    // We will use a for loop to go through our string
    
    // This time, we are looking for a series of characters - a substring     
    for (var index = 0; index <= lastIndex; index++){  // substring gets a part of a string from a start to end index         
        var current = str.substring(index, index + numChars); // if the substring matches our series, increase our counter         
    if (current == search){                         
            count++;         
        }     
    }

    return count;
}