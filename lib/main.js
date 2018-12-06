'use strict';

var colorSection = document.getElementsByClassName('colors');
var numberSection = document.getElementsByClassName('numbers');
var numberSectionTwo = document.getElementsByClassName('numberstwo');
var fortuneColor = document.querySelectorAll('.colors p');
var fortuneNumber = document.querySelectorAll('.numbers p');
var fortuneNumberTwo = document.querySelectorAll('.numberstwo p');

var magicFortunes = ['The fortune you seek is in another cookie', 'That is what she said', 'You will be hungry again in one hour', 'Loading', 'It is a good day to have a good day', 'That was not chicken', 'I am worth a fortune', 'Go ask your mom', 'You have rice in your teeth', 'No lucky numbers today'];

var yourFortune = document.querySelector('#fortune-wrapper');
var yourFortunePlaceholder = document.querySelector('#fortune-wrapper p span');

//Ask user to choose a color + loop through # times that the name of the color is long
function functionWrapper() {
    var _this = this;

    var transition = function transition() {
        //toggle class transition on colorSection
        colorSection[0].classList.toggle('transition');
    };

    var runOne = function runOne() {
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
            colorSection[0].classList.remove('show');
            numberSection[0].classList.remove('hide');
            numberSection[0].classList.add('show');
        }, thisColorLength * 1000);
    };
    runOne();
};

//Number; loop through once for each letter in number
function functionWrapperTwo() {
    var _this2 = this;

    var transitionTwo = function transitionTwo() {
        numberSection[0].classList.toggle('transition');
    };

    var runTwo = function runTwo() {
        var thisNumber = _this2.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);
        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                transitionTwo();
            }, i * 500);
        }
        setTimeout(function () {
            numberSection[0].classList.add('hide');
            numberSection[0].classList.remove('show');
            numberSectionTwo[0].classList.remove('hide');
            numberSectionTwo[0].classList.add('show');
        }, numberValue * 1000);
    };
    runTwo();
};

//Choose number, display fortune
function functionWrapperThree() {
    var _this3 = this;

    var transitionThree = function transitionThree() {
        numberSectionTwo[0].classList.toggle('transition');
    };

    var runThree = function runThree() {
        var thisNumber = _this3.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);
        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                transitionThree();
            }, i * 500);
        }
        setTimeout(function () {
            numberSectionTwo[0].classList.add('hide');
            numberSectionTwo[0].classList.remove('show');
            //Show your fortune
            yourFortune.classList.remove('hide');
            yourFortune.classList.add('show');
            magicFortunes.sort(function (a, b) {
                return 0.5 - Math.random();
            });
            var fortuneText = document.createTextNode(magicFortunes[0]);
            yourFortunePlaceholder.appendChild(fortuneText);
        }, numberValue * 1000);
    };
    runThree();
};

for (var i = 0; i < fortuneColor.length; i++) {
    fortuneColor[i].addEventListener('click', functionWrapper);
};

for (var _i = 0; _i < fortuneNumber.length; _i++) {
    fortuneNumber[_i].addEventListener('click', functionWrapperTwo);
};

for (var _i2 = 0; _i2 < fortuneNumber.length; _i2++) {
    fortuneNumberTwo[_i2].addEventListener('click', functionWrapperThree);
};