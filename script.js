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

let score = 0;
let activePlayer = 0;
// Handling event rolling dice functionality

btnRoll.addEventListener('click', function () {
  console.log('Who is playing', activePlayer + 1);
  // rolling dice
  const diceNumber = Math.trunc(Math.random() * 6 + 1);

  // Display dice image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    score += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = score;
  } else {
    // switch to the next player
    score = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
  }
});

// Handling hold functionality
btnHold.addEventListener('click', function () {
  let score = +document.getElementById(`score--${activePlayer}`).textContent;
  let current = +document.getElementById(`current--${activePlayer}`)
    .textContent;
  let total = current + score;

  document.getElementById(`score--${activePlayer}`).textContent =
    current + score;

  if (total >= 100) {
    console.log(`Player ${activePlayer + 1} wins the game`);
  } else {
    // switch to the next player

    score = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

// Handling reset game
btnNew.addEventListener('click', function () {
  // reset scores
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  // Hide dice image
  diceEl.classList.add('hidden');
  score = 0;
  activePlayer = 0;
});
