// Assignment code here
var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers:  "1234567890",
  special: "\"!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"
};
createdPassword = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword = function() {
  var passLength = window.prompt("Please choose character length of password between 8 and 128.");
  if (passLength < 8 || passLength > 128) {
    window.alert("Please select a number between 8 and 128.");
    generatePassword();
  }
  passwordCriteria();

  for (var i = 0; i < passLength; ++i) {
    createdPassword[i] = charSelection[Math.floor(Math.random() * charSelection.length)];
  }
  return createdPassword.join('');
}


var passwordCriteria = function() {
  var userInput = window.confirm("Would you like to use uppercase characters?");
    if (userInput) {
      charSelection = characters.upperCase;
    }
    var userInput = window.confirm("Would you like to use lowercase characters?");
    if (userInput) {
      charSelection = charSelection + characters.lowerCase;
    }
    var userInput = window.confirm("Would you like to use numbers?");
    if (userInput) {
      charSelection = charSelection + characters.numbers;
    }
    var userInput = window.confirm("Would you like to use special characters?")
    if (userInput) {
      charSelection = charSelection + characters.special;
    }
    if (charSelection === "" || charSelection === null ) {
      window.alert("You must choose at least one character type.");
      passwordCriteria();
  }
};  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
