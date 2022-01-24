// Assignment code here
function generatePassword() {

    var approvedChars = '';
    var password = '';
    console.log("Button working as intended.") //testing purposes only

// step 1. Prompt user for password gen

var promptLength = parseInt(window.prompt("How long is the password? Please select between 8-128 characters."));

if (promptLength <8 || promptLength >128) {
    window.alert("You need to provide a length between 8-128 characters!");
    return generatePassword();
}

  else { 
      console.log(promptLength);
  }

  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '1234567890'
  var specialChars = '!@#$%^&*()'

  var wantsUppercase = window.confirm("Would you like uppercase characters?");
  var wantsLowercase = window.confirm("Would you like lowercase characters?");
  var wantsNumbers = window.confirm("Would you like numbers?");
  var wantsSpecials = window.confirm("Would you like special characters?");

  if (wantsUppercase === true) {
      approvedChars += uppercaseChars;
  } 

  if (wantsLowercase === true) {
      approvedChars += lowercaseChars;
  }

  if (wantsNumbers === true) {
      approvedChars += numbers;
  }

  if (wantsSpecials === true) {
      approvedChars += specialChars;
  }


// step 3. generate password based on criteria 
  for(var i=0; i <= promptLength; i++) {
      password += Math.floor(Math.random() * approvedChars.length);
  }




// step 4. Display the generated password on page/in an alert.
    return password;
}


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