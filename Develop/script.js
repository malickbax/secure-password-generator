// Assignment code here

  // 1. When user clicks the button to generate a password, 
  // user is promted to choose the length of password between 8 and 128 characters

var passwordLength = number = prompt("How many characters do you want your password to be? Enter a number between 8 and 128")
  if (passwordLength < 8 || passwordLength > 128){
    alert("Your password must be between 8 and 128 characters long. Please enter a number in that range")
}

// 2. After that, System prompts user to choose whether they want to include uppercase, 
// lowercase, number, and/or special characters

  if (passwordLength >=8 && passwordLength <= 128){
    var uppercase = confirm ("Do you want UPPER CASE included in your password?")
    var lowercase = confirm ("Do you want lower case included in your password?")
    var num = confirm ("Do you want numbers included in your password?")
    var spec = confirm ("Do you want special characters included in your password?")
  } 

// 3. At least one character type should be selected means: If user answers no to lowercase, 
// uppercase, numeric, and special characters, then system automatically alerts user to choose at least one type to proceed. 
  while (spec != true && num != true && lowercase != true && uppercase != true){
    alert("Your password must include at least one character type. Please select at least one: upper case, lower case, number, or special character");
    var uppercase = confirm ("Do you want UPPER CASE included in your password?")
    var lowercase = confirm ("Do you want lower case included in your password?")
    var num = confirm ("Do you want numbers included in your password?")
    var spec = confirm ("Do you want special characters included in your password?")
}

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





// var generatePassword = function () {
//   var length = "";
//   if (length < 8 || length > 128){
//     alert("Length must be 8-128 characters")
// }
  
//   console.log("Your password will be " + length + " characters long");
// };

// Based on the number typed by the user, the system generates 
// an array with an index corresponding to the number of characters requested
