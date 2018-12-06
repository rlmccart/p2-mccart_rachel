const colorSection = document.getElementsByClassName('colors');
const numberSection = document.getElementsByClassName('numbers');
const fortuneColor = document.querySelectorAll('.colors p'); 
const fortuneNumber = document.querySelectorAll('.numbers p'); 

const magicFortunes = ['The fortune you seek is in another cookie', 'That is what she said', 'You will be hungry again in one hour', 'Loading', 'It is a good day to have a good day', 'That was not chicken', 'I am worth a fortune', 'Go ask your mom', 'You have rice in your teeth', 'No lucky numbers today']; 

const yourFortune = document.querySelector('#fortune-wrapper');
const yourFortunePlaceholder = document.querySelector('#fortune-wrapper p span');

//Choose a color + loop through # times that the name of the color is long
function functionWrapper () {
    
    const transition  = () => {
        //toggle class transition on colorSection
        colorSection[0].classList.toggle('transition');
    };
   
    const runColor = () => {
        let thisColorText = this.childNodes[0].nodeValue;
        let thisColorLength = thisColorText.length;
        for (let i = 0; i < thisColorLength * 2; i++) {
            setTimeout(function(){ 
            transition(); 
            }, i * 500); 
            }
            //Display numbers 
            setTimeout(function(){
            colorSection[0].classList.add('hide');
            colorSection[0].classList.remove('show');    
            numberSection[0].classList.add('show'); 
            numberSection[0].classList.remove('hide');    
            }, thisColorLength * 1000);
        };  
    runColor();
};


//Number; loop through once for each letter in number
function functionWrapperTwo () {
    
    const transitionTwo  = () => {
        numberSection[0].classList.toggle('transition');
    };
   
    const runColorTwo = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        for (let i = 0; i < numberValue * 2; i++) {
            setTimeout(function(){ 
            flashTransitionTwo(); 
            }, i * 500); 
            }
            setTimeout(function(){
            colorSection[0].classList.add('hide');
            colorSection[0].classList.add('show');
            numberSection[0].classList.remove('hide');
            numberSection[0].classList.remove('show'); 
            }, numberValue * 1000);
        };  
    runColorTwo();
};


//Choose number, display fortune
function functionWrapperThree () {
    
    const flashTransitionThree  = () => {
        numberSection[0].classList.toggle('transition');
    };
   
    const runColorThree = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        for (let i = 0; i < numberValue * 2; i++) {
            setTimeout(function(){ 
            flashTransitionThree(); 
            }, i * 500); 
            }
            setTimeout(function(){
            numberSection[0].classList.add('hide');
            numberSection[0].classList.remove('show');
            //Display fortunes
            yourFortune.classList.remove('hide');
            yourFortune.classList.add('fortune-show');
            magicFortunes.sort(function(a, b){return 0.5 - Math.random()});
            const fortuneText = document.createTextNode(magicFortunes[0]);
            yourFortunePlaceholder.appendChild(fortuneText);
            }, numberValue * 1000);
        };  
    runColorThree();
};

for (let i=0; i < fortuneColor.length; i++) {
    fortuneColor[i].addEventListener('click', functionWrapper);
};

for (let i=0; i < fortuneNumber.length; i++) {
    fortuneNumber[i].addEventListener('click', functionWrapperTwo);
};

for (let i=0; i < fortuneNumber.length; i++) {
    fortuneNumber[i].addEventListener('click', functionWrapperThree);
};
    
   
    

