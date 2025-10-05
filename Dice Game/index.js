let player1Dice = Math.floor(Math.random() * 6) + 1;
let player2Dice = Math.floor(Math.random() * 6) + 1;

let player1DiceImg = document.getElementById('player1DiceImg');
let player2DiceImg = document.getElementById('player2DiceImg');

let lightIndustires = document.querySelector('footer');
lightIndustires.style.fontSize = '22px';

player1DiceImg.style.width = '300px';
player2DiceImg.style.width = '300px';

player1DiceImg.style.marginRight = '20px';
player2DiceImg.style.marginLeft = '20px';

let dice1ImgSrc = './images/dice' + player1Dice + '.png';
let dice2ImgSrc = './images/dice' + player2Dice + '.png';

player1DiceImg.setAttribute('src', dice1ImgSrc);
player2DiceImg.setAttribute('src', dice2ImgSrc);

let flag = 'Draw';

if (player1Dice > player2Dice) {
  flag = 'Player 1 Wins 🚩';
} else if (player2Dice > player1Dice) {
  flag = 'Player 2 Wins 🚩';
} else {
  flag = 'Draw';
}

document.querySelector('h1').innerHTML = flag;
