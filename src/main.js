// color variables 

var colorName = document.querySelectorAll('#one p');
var colorSquares = document.getElementById('one');

// number variables 
var numberName = document.querySelectorAll('#two p');
var numberSquares = document.getElementById('two');
var fortuneWrapper = document.getElementById('wrapper');

function wrapper() {
    var _this= this;
    
    //show color function 
    var showColor = function showColor() {
        var colorSelect = _this.parentNode;
        colorSelect.classList.toggle('opaque');
    };
    
    var hideSquares = function hideSquares() {
        colorSquares.classList.toggle('hide'); 
        numberSquares.classList.toggle('hide');
    };
    
    //loop
    var loopThrough = function loopThrough() {
        var colorSquaresText = _this.childNodes[0].nodeValue;
        var squaresTextLength = colorSquaresText.length;
        var squaresTextLength2 = squaresTextLength * 2;
        
        for (var i = 0; i <= squaresTextLength2; i++) {
            if (i < squaresTextLength * 2) {
                setTimeout(function() {
                    showColor();
                }, i * 500);
        } else if (i === squaresTextLength2) {
                setTimeout(function() {
                    hideSquares();
                }, i * 500);
            };
        };
    };
    loopThrough();
};

var clicks = 0;

function countClicks() {
    clicks++;
};

function wrapperTwo() {
    var _thisTwo = this;
    
    var numberSelect = this.parentNode;
    var showNumber = function showNumber() {
        numberSelect.classList.toggle('opaque');
    };
    
    var magicFortunes = ['The fortune you seek is in another cookie', 'That is what she said', 'You will be hungry again in one hour', 'Loading', 'It is a good day to have a good day', 'That was not chicken', 'I am worth a fortune', 'Go ask your mom', 'You have rice in your teeth', 'No lucky numbers today']; 
    var fortuneGoesHere = document.querySelector('#wrapper p span');
    var fortuneTextPlaceholder = document.createTextNode(''); 
    fortuneGoesHere.appendChild(fortuneTextPlaceholder);
    
    var showFortune = function showFortune() {
        fortuneWrapper.classList.toggle('hide');
        numberSquares.classList.toggle('hide');
        magicFortunes.sort(function (a.b) {
            return 0.5 - Math.random();
        });
        var fortuneText = document.createTextNode(magicFortunes[0]);
        fortuneGoesHere.appendChild(fortuneText);
    };
    
    var loopThroughTwo = function loopThroughTwo() {
        var numberText = _thisTwo.childNodes[0].nodeValue;
        var numberValue = parseInt(numberText);
        var numberValueTwo = numberValue * 2;
        for (var i = 0; i < numberValueTwo; i++) {
            setTimeout(function() {
                showNumber();
            }, i * 500);
        };
    };
    var runFunction = function functionRun() {
        if (clicks < 1) {
            loopThroughTwo();
        } else if (clicks === 1) {
            showFortune();
        };
    };
    runFunction(); 
};

for (var i = 0; i < colorName.length; i++) {
    colorName[i].addEventListener('click', wrapper);
    numberName[i].addEventListener('click', wrapperTwo);
    numberName[i].addEventListener('click', countClicks);
};




