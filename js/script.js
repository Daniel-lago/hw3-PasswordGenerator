// Assignment Code
// CREATION OF THE VARIABLES WE WILL NEED IN OUR CODE AS GLOBAL 
var generateBtn = document.querySelector("#generate");
var upper = document.getElementById("upperPass");
var lower = document.getElementById("lowerPass");
var number = document.getElementById("numberPass");
var special = document.getElementById("specialPass");
var passwordText = document.getElementById("password");

// VARIABLES WE WILL USE TO CREATE PASSWORD AND ITS FEATURES
var options = {
  length: parseInt(document.getElementById("lengthPass").value),
  uppercase: true,
  lowercase: true,
  numbers: true,
  special: true, 
  }

var caracteres = {
  uppercase: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
  lowercase: ' a b c d e f g h i j k l m n o p q r s t u v w x y z',
  numbers: '0 1 2 3 4 5 6 7 8 9',
  special: '! @ # $ % / * ( ) _ - + = { [ } ] ; : < , > . ?'
  }

// EVENT LISTENERS TO SWITCH WHETER TRUE OR FALSE OPTIONS FEATURES
upper.addEventListener("click", function(){
 options.uppercase = !options.uppercase
});

lower.addEventListener("click", function(){
  options.lowercase = !options.lowercase
});

 number.addEventListener("click", function(){
  options.numbers = !options.numbers
});

 special.addEventListener("click", function(){
  options.special = !options.special
});

// EVENT LISTENER TO GENERATE PASSWORD ONCE WE CLICK IN GENERATE BUTTON
generateBtn.addEventListener("click", function(){
  generatePassword();
});

//  GENERATE PASSWORD FUNCTIONALITY 
  //  1.-CREATE VARIABLES TO SAVE OUR TEMPORAL AND FINAL PASSWORD 
  //  2. ITERATE INTO THE FEATURES TO CHECK IF THEY ARE ACTIVE OR DISABLE
  //  3.-ADD VALUES FROM CHARACTERS INTO OUR TEMPORAL PASSWORD VARIABLE DEPENDING OF THE ACTIVE FEATURES
  //  4.-DEFINE INTO ONE VAR THE VALUE SET FROM USER INTO THE INPUT 
function generatePassword (){
    var finalPass = " "
    var password = " "
    for (selection in options) {
      if (options[selection] == true)
      finalPass += caracteres[selection] + " ";
      var inputLength = parseInt(document.getElementById("lengthPass").value);
    }
  // 5.-CUT SPACES AT THE END/START OF OUR TEMPORAL PASSWORD AND THEN TURNING IT INTO AN ARRAY
    finalPass = finalPass.trim();
    finalPass = finalPass.split(" ");
  // 6.-CHECKING IF THE USER VALUE IS INSIDE OF THE ACCEPTANCE CRITERIA DESIGNED AND IF ITS NOT ALERT USER
  // 7- IF VALUE IS OK THEN CREATE A RANDOM MIX OF CHARACTERS BASED IN LENGTH OF USER INPUT VALUE
  // 8.-SAVING FINAL PASSWORD AND USING IT TO FILL OUR SELECTION FOR DISPLAY IN THE PASSWORD BOX CREATOR
    if (inputLength >= 1 && inputLength < 129){
      for (var i=0; i< inputLength; i++){
        password += finalPass[Math.floor(Math.random() * finalPass.length)];
        passwordText.textContent = password;
      }
    } else {
        alert ("Please choose a number higher than 0 and lower than 129")
      }
};