'use strict';

var colorSection = document.getElementsByClassName('colors');
var numberSection = document.getElementsByClassName('numbers');
var fortuneColor = document.querySelectorAll('.colors p');
var fortuneNumber = document.querySelectorAll('.numbers p');

var magicFortunes = ['The fortune you seek is in another cookie', 'That is what she said', 'You will be hungry again in one hour', 'Loading', 'It is a good day to have a good day', 'That was not chicken', 'I am worth a fortune', 'Go ask your mom', 'You have rice in your teeth', 'No lucky numbers today'];

var yourFortune = document.querySelector('#fortune-wrapper');
var yourFortunePlaceholder = document.querySelector('#fortune-wrapper p span');

//Choose a color + loop through # times that the name of the color is long
function functionWrapper() {
    var _this = this;

    var transition = function transition() {
        //toggle class transition on colorSection
        colorSection[0].classList.toggle('transition');
    };

    var runColor = function runColor() {
        var thisColorText = _this.childNodes[0].nodeValue;
        var thisColorLength = thisColorText.length;
        for (var i = 0; i < thisColorLength * 2; i++) {
            setTimeout(function () {
                transition();
            }, i * 500);
        }
        //Display numbers 
        setTimeout(function () {
            colorSection[0].classList.add('hide');
            colorSection[0].classList.add('show');
        }, thisColorLength * 1000);
    };
    runColor();
};

//Number; loop through once for each letter in number
function functionWrapperTwo() {
    var _this2 = this;

    var transitionTwo = function transitionTwo() {
        numberSection[0].classList.toggle('transition');
    };

    var runColorTwo = function runColorTwo() {
        var thisNumber = _this2.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);
        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                flashTransitionTwo();
            }, i * 500);
        }
        setTimeout(function () {
            colorSection[0].classList.add('hide');
            colorSection[0].classList.add('show');
            numberSection[0].classList.remove('hide');
            numberSection[0].classList.remove('show');
        }, numberValue * 1000);
    };
    runColorTwo();
};

//Choose number, display fortune
function functionWrapperThree() {
    var _this3 = this;

    var flashTransitionThree = function flashTransitionThree() {
        numberSection[0].classList.toggle('transition');
    };

    var runColorThree = function runColorThree() {
        var thisNumber = _this3.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);
        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                flashTransitionThree();
            }, i * 500);
        }
        setTimeout(function () {
            numberSection[0].classList.add('hide');
            numberSection[0].classList.remove('show');
            //Display fortunes
            yourFortune.classList.remove('hide');
            yourFortune.classList.add('fortune-show');
            magicFortunes.sort(function (a, b) {
                return 0.5 - Math.random();
            });
            var fortuneText = document.createTextNode(magicFortunes[0]);
            yourFortunePlaceholder.appendChild(fortuneText);
        }, numberValue * 1000);
    };
    runColorThree();
};

for (var i = 0; i < fortuneColor.length; i++) {
    fortuneColor[i].addEventListener('click', functionWrapper);
};

for (var _i = 0; _i < fortuneNumber.length; _i++) {
    fortuneNumber[_i].addEventListener('click', functionWrapperTwo);
};

for (var _i2 = 0; _i2 < fortuneNumber.length; _i2++) {
    fortuneNumber[_i2].addEventListener('click', functionWrapperThree);
};