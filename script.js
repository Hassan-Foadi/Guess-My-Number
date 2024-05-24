'use strict';
/*
//NOTE: interacting JS with a webpage is called DOM manipulation
// NOTE: DOM is Document Object Model: is a  connection point between HTML and JS code.
// NOTE: DOM is not a part of JS. it's a Part of web API. they are like libraries that browsers implement and we can access from our JS code. API = Application Programming Interface.
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // COMMENT:When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    // COMMENT: When Player Wins
    // COMMENT: Whenever your are manipulating style you have to specify a string and it should be camelCase: line 34
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // COMMENT: When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost The Game!';
      displayMessage('You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //     // COMMENT:When number is too high

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost The Game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // COMMENT:When number is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost The Game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Challenge 1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
