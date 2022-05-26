// establish DOM variables
const passDisp = document.getElementById('password')
const genBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const upperChk = document.getElementById('upper');
const lowerChk = document.getElementById('lower');
const symbChk = document.getElementById('symb');
const lengthInp = document.getElementById('length');


// password length var
let length = lengthInp.value;

const charGen = [
    {
        fn: randomUpper,
        select: true
    },
    {
        fn: randomLower,
        select: true
    },
    {
        fn: randomSymb,
        select: true
    },
];

// functions to generate a random character of each type
// uppercase is 65-90
function randomUpper() {
    const charCode = Math.floor(Math.random() * 26 + 65);
    return String.fromCharCode(charCode);
}
// lowercase is 97-122
function randomLower() {
    const charCode = Math.floor(Math.random() * 26 + 97);
    return String.fromCharCode(charCode);
}

// symbols are 33-64 (includes numbers)
function randomSymb() {
    const charCode = Math.floor(Math.random() * 32 + 33)
    return String.fromCharCode(charCode);
}

// function to loop through and create the password
// while loop to generate random number 1-3 while length has not been met
// if selection for that index is false do not add anything, else execute function and push to array
function passGen() {
    let passArr = [];
    if (!charGen[0].select && !charGen[1].select && !charGen[2].select) {
        alert('Please select at least one type of character');
        return;
    } else {
        copyBtn.innerHTML = 'Copy to Clipboard';
        while (passArr.length < length) {
            const fnId = Math.floor(Math.random() * 3);
            // if that type of char is not selected don't add anything, keep looping
            if (charGen[fnId].select) {
                // console.log(true)
                passArr.push(charGen[fnId].fn())
            };
        };
        passDisp.innerHTML = passArr.join('');
    }
};

// event listeners for checkboxes

// uppercase
upperChk.addEventListener('click', () => {
    charGen[0].select = upperChk.checked;
});

// lowercase
lowerChk.addEventListener('click', () => {
    charGen[1].select = lowerChk.checked;
});

// symbols
symbChk.addEventListener('click', () => {
    charGen[2].select = symbChk.checked;
});

// length
lengthInp.addEventListener('change', () => {
    const lengthVal = lengthInp.value;
    if (lengthVal < 8 || lengthVal > 128) {
        alert('Enter between 8 and 128 characters');
        lengthInp.value = length;
    } else {
        length = lengthVal;
    };

})

// event listeners on generate and copy buttons
genBtn.addEventListener('click', () => {
    
    passGen();

});

copyBtn.addEventListener('click', () => {
    const password = passDisp.innerHTML;

    // credit to https://www.w3.org/TR/clipboard-apis/#async-clipboard-api for this clipboard code
    var data = [new ClipboardItem({ "text/plain": new Blob([password], { type: "text/plain" }) })];
    navigator.clipboard.write(data).then(function() {
      console.log("Copied to clipboard successfully!");
      copyBtn.innerHTML = 'Copied!'
    }, function() {
      console.error("Unable to write to clipboard. :-(");
    });
});