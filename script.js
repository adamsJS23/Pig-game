'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
console.log(score0El, score1El);

let currentScore = 0;

// Handling event rolling dice functionality

btnRoll.addEventListener('click', function () {
  // rolling dice
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(diceNumber);

  // Display dice image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;
  console.log(diceEl);

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    current0El.textContent = currentScore;
  } else {
    
  }
});
