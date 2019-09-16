'use strict';

const num1 = Math.floor(Math.random() * 3) + 1;
const num2 = Math.floor(Math.random() * 3) + 1;

function RockPaperScissors(num1, num2) {
  let result = ' ';
    
  if (num1 > 3 || num1 < 1) {
    result = 'error';
  }

  if (num1 === num2) {
    result = 'tie';
  }

  if (num1 === 1 && num2 === 2) {
    result = 'Player 2 wins';
  }

  if (num1 === 1 && num2 === 3) {
    result = 'Player 1 wins';
  }

  if (num1 === 2 && num2 === 3) {
    result = 'Player 2 wins';
  }

  if (num1 === 2 && num2 === 1) {
    result = 'Player 1 wins';
  }

  if (num1 === 3 && num2 === 1) {
    result = 'Player 2 wins';
  }

  if (num1 === 3 && num2 === 2) {
    result = 'Player 1 wins';
  }
  return result;
}

console.log(RockPaperScissors(num1, num2));