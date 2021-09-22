//button clicked open popup(s)
//save values of popup(s) -object
//length between 8-128 characters, at least one must be true
//use confirm for true/false, change "cancel" to "no"
//character arrays
//function to randomly pick from each array and append it to the pwd using +=
//place the generated pwd into the html box

var selections = {
  length: 20,
  upperCase: true,
  lowerCase: true,
  symbols: true,
  numbers: true,
};

var fnArr = ['randomSymb','randomUpper','randomLower','randomNum']

var symbArr = ['!','@','#','$','%','^','&','*','(',')'];

var pwd = ''

// console.log(String.fromCharCode(Math.floor(Math.random()*26)+65));
// console.log(String.fromCharCode(Math.floor(Math.random()*26)+97));
// console.log(symbArr[Math.floor(Math.random()*symbArr.length)]);
// console.log(Math.floor(Math.random()*10));


//random symbol
function randomSymb() {
  console.log('symbfn');
  var symchar = symbArr[Math.floor(Math.random()*symbArr.length)];
  return symchar;
};

//random uppercase - idea from Traversy Media - https://www.youtube.com/watch?v=duNmhKgtcsI
function randomUpper() {
  console.log('upperfn');
  var upperChar = String.fromCharCode(Math.floor(Math.random()*26)+65);
  return upperChar;
};

//random lowercase - idea from Traversy Media - https://www.youtube.com/watch?v=duNmhKgtcsI
function randomLower() {
  console.log('lowerfn');
  var lowerChar = String.fromCharCode(Math.floor(Math.random()*26)+97);
  return lowerChar;
};

//random number
function randomNum() {
  console.log('numfn');
  var numChar = Math.floor(Math.random()*10).toString();
  numChar = numChar;
  console.log(typeof numChar);
  return numChar;
}

//run function from string
function runFun(name) {
  var pwdChar = ''
  if (name === 'randomSymb') {
    pwdChar = randomSymb();
  } else if (name === 'randomUpper') {
    pwdChar = randomUpper();
  } else if (name === 'randomLower') {
    pwdChar = randomLower();
  } else if (name === 'randomNum') {
    pwdChar = randomNum();
    console.log('pwdChar in runFun: ' + pwdChar);
  };
  console.log('pwdChar in runFun: ' + pwdChar);
  return pwdChar;
}

// fnArr[Math.floor(Math.random()*fnArr.length)]
// console.log(fnArr[Math.floor(Math.random()*fnArr.length)])

//generate
function generatePassword(len,upper,lower,symb,num) {
  if (upper && lower && symb && num) {
    for (var i=0;i < len; i++) {
      pwd += runFun(fnArr[Math.floor(Math.random()*fnArr.length)]) //pass this to a case function, return value from function to case function and back here, append to pwd
    }
  }
}

generatePassword(10,true,true,true,true)
console.log('password = ' + pwd )

// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(document.querySelector("#generate"));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
