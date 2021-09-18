'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else {
    //player win
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Guess!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      if (document.querySelector('.highscore').textContent < score)
        document.querySelector('.highscore').textContent = score;
    } //guess low
    else if (guess < secretNumber && score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
    } //guess high
    else if (guess > secretNumber && score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
    } //player lose
    else {
      document.querySelector('.message').textContent = 'You Lose!';
      score = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
