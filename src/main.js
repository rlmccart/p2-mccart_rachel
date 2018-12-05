// variables to select color

const colorName = document.getElementsByTagName('p')[0];
const colorSquare = document.querySelectorAll('square');

//Create Placeholder Text 
var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);

var magicFortunes = ['The fortune you seek is in another cookie', 'That is what she said', 'You will be hungry again in one hour', 'Loading', 'It is a good day to have a good day', 'That was not chicken', 'I am worth a fortune', 'Go ask your mom', 'You have rice in your teeth', 'No lucky numbers today']; 

function wrapper() {

  const flashColor = () => {
    //colorBlock.classList.toggle('transparent');
    console.log('hello');
  };

  const loopThrough = () => {
    let colorSquareText = this.childNodes[0].nodeValue;
    let SquaresTextLength = colorSquareText.length;

    for (let i = 0; i < BlocksTextLength * 2; i++) {
      setTimeout(function(){
        flashColor();
      }, i * 1000);
    };

  };
  loopThrough();

  //const hideSquare = () => {
  //  colorSection.classList.toggle('hide');
  //  numberSection.classList.toggle('hide');
  //};

  //hideSquare();


};

for(let i = 0; i < colorName.length; i++) {
  colorName[i].addEventListener('click', wrapper);
};