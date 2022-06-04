// Assignment code here
// 1. When user clicks the button to generate a password, 
// user is prompted to choose the length of password between 8 and 128 characters

  var passwordLength = prompt("How many characters do you want your password to include? Enter a number between 8 and 128")    
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

// 3. At least one character type should be selected means: if user answers no to lowercase, 
// uppercase, numeric, and special characters, then system automatically alerts user to choose at least one type to proceed. 
  while (spec != true && num != true && lowercase != true && uppercase != true){
    alert("Your password must include at least one character type. Please select at least one: upper case, lower case, number, or special character");
  // Using alert function above to alert user to include characters needed 
    var uppercase = confirm ("Do you want UPPER CASE included in your password?")
    var lowercase = confirm ("Do you want lower case included in your password?")
    var num = confirm ("Do you want numbers included in your password?")
    var spec = confirm ("Do you want special characters included in your password?")
}

// 4. After all prompts are answered, a password w/ selected criteria is generated 
// in an alert or written to the page
document.getElementById("password").value = randoSequence(generatePassword)("");
var generatePassword = document.querySelector("#generate");
function generatePassword() {
  var passwordText = "";
  var allowed = {};
  if (uppercase) passwordText += random(allowed.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowercase) passwordText += random(allowed.lowercase = "abcdefghijklmnopqrstuvwxyz");
  if (num) passwordText += random(allowed.num = "0123456789");
  if (spec) passwordText += random(allowed.spec = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  
  for (var i = passwordText.passwordLength; i < passwordLength; i++) passwordText += rando(rando(allowed).value);
}
document.getElementById("password").value = randoSequence(password).join("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);