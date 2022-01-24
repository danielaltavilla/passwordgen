// Assignment code here
function generatePassword() {
    console.log("Button working as intended.") //testing purposes only

// step 1. Prompt user for password gen

var promptLength = window.prompt("How long is the password? Please select between 8-128 characters.");

if (promptLength <8 || promptLength >128) {
    window.alert("You need to provide a length between 8-128 characters!");
    return generatePassword();
}

  else { 
      console.log(promptLength);
  }

  var chars = [
      "uppercase letters",

      "lowercase letters",

      "numbers",

      "special chars",
  ]
   
  for (let i = 0; i < 4; i++) {
      var charsConfirm = window.confirm("Will this password include " + chars[i] + "?");

      if (charsConfirm) {

      }
  }
//      1b. Confirm whether upper,lower,numeric,and/or special char

// step 2. Validate the input 
// step 3. generate password based on criteria 



// step 4. Display the generated password on page/in an alert.
    return "generated password";
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