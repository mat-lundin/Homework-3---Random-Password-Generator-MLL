//initialize length as 0 for the while loop that controls the prompt
var selects = {
  length: 0,
  upperCase: true,
  lowerCase: true,
  symbols: true,
  numbers: true,
};

var fnArr = ['randomUpper','randomLower','randomSymb','randomNum'];

var symbArr = ['!','@','#','$','%','^','&','*','(',')'];

var pwd = '';


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

//run function from function name as string
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
  };
  return pwdChar;
}



//generate password based on criteria entered
function generatePassword(len,upper,lower,symb,num) {
  //reset pwd in case multiple passwords are generated
  pwd = ''; 
  if (upper && lower && symb && num) {
    for (var i=0;i < len; i++) {
      pwd += runFun(fnArr[Math.floor(Math.random()*fnArr.length)]); 
    }
  } else if (!upper && lower && symb && num) {
    var fnMod = fnArr.slice(1);
    console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }

  } else if (!upper && !lower && symb && num) {
      var fnMod = fnArr.slice(2);
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (!upper && !lower && !symb && num) {
      var fnMod = fnArr.slice(3);
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && !lower && !symb && !num) {
      var fnMod = fnArr.slice(0,1);
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && lower && !symb && !num) {
      var fnMod = fnArr.slice(0,2);
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && lower && symb && !num) {
      var fnMod = fnArr.slice(0,3);
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && !lower && symb && num) {
      var fnMod = [fnArr[0],fnArr[2],fnArr[3]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && lower && !symb && num) {
      var fnMod = [fnArr[0],fnArr[1],fnArr[3]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && !lower && !symb && num) {
      var fnMod = [fnArr[0],fnArr[3]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (!upper && lower && !symb && num) {
      var fnMod = [fnArr[1],fnArr[3]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (!upper && lower && symb && !num) {
      var fnMod = [fnArr[1],fnArr[2]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (upper && !lower && symb && !num) {
      var fnMod = [fnArr[0],fnArr[2]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (!upper && lower && !symb && !num) {
      var fnMod = [fnArr[1]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (!upper && !lower && symb && !num) {
      var fnMod = [fnArr[2]];
      console.log(fnMod);
      for (var i=0;i < len; i++) {
        pwd += runFun(fnMod[Math.floor(Math.random()*fnMod.length)]);
      }
  } else if (!upper && !lower && !symb && !num) {
      alert('You must select at least one character type.')
      pwd = 'Click Generate Password to try again.'
      }
  return pwd;};


// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy")

// Write password to the #password input
function writePassword() {
  var password = generatePassword(selects.length,selects.upperCase,selects.lowerCase,selects.symbols,selects.numbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  selects.length = 0;

};

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  while(selects.length < 8 || selects.length > 128 || isNaN(selects.length)) {
    var len = prompt('Please enter a number of characters (8-128) for the password length.')
    //add a specific alert if user adds non-numbers
    if (len != null) {
      selects.length = parseInt(len)
      if (isNaN(selects.length)){
      alert('Only numbers please!');
      };
    } 
    else {
      selects.length = 0;
      return;
    }
  } {
    copyBtn.innerText = 'Copy to Clipboard';
    selects.upperCase = confirm('Include upper case letters? (OK = Yes, Cancel = No)');
    selects.lowerCase = confirm('Include lower case letters? (OK = Yes, Cancel = No)');
    selects.symbols = confirm('Include special characters/symbols? (OK = Yes, Cancel = No)');
    selects.numbers = confirm('Include numbers? (OK = Yes, Cancel = No)');
    writePassword();
  }

});

// Add event listener to copy button
copyBtn.addEventListener('click', function(){
  var pwd = document.querySelector("#password");
  pwd.select();
  document.execCommand("copy");
  copyBtn.innerText = 'Copied!';
  console.log(copyBtn, copyBtn.value);
  
});