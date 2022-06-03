// Assignment code here

// 1. When user clicks the button to generate a password, 
// user is promted to choose the length of password between 8 and 128 characters

// 2. After that, System prompts user to choose whether they want to include lowercase, 
// uppercase, numeric, and/or special characters

// 3. At least one character type should be selected means: If user answers no to lowercase, 
// uppercase and numeric, then system automatically chooses yes on the special characters question.

// 4. After all prompts are answered, a password w/ selected criteria is generated 
// in an alert or written to the page














// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
