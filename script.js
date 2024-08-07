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
let isGamePlaying, activePlayer, score;

resetGame();
console.log(score0El, score1El);

function resetGame() {
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  isGamePlaying = true;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  score = 0;
  diceEl.classList.toggle('hidden');
}

function switchPlayer() {
  score = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}


// Handling event rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (isGamePlaying) {
    console.log('Who is playing', activePlayer + 1);
    // rolling dice
    const diceNumber = Math.trunc(Math.random() * 6 + 1);

    // Display dice image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      score += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = score;
    }
    // switch to the next player
    else switchPlayer();
  }
});

// Handling hold functionality
btnHold.addEventListener('click', function () {
  if (isGamePlaying) {
    let score = +document.getElementById(`score--${activePlayer}`).textContent;
    let current = +document.getElementById(`current--${activePlayer}`)
      .textContent;
    let total = current + score;

    document.getElementById(`score--${activePlayer}`).textContent = total;

    if (total >= 100) {
      console.log(`Player ${activePlayer + 1} wins the game`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      diceEl.classList.toggle('hidden');
      isGamePlaying = false;
    }
    // switch to the next player
    else switchPlayer();
  }
});

// Handling reset game
btnNew.addEventListener('click', function () {
  document
  .querySelector(`.player--${activePlayer}`)
  .classList.toggle('player--winner');
  document.querySelector(`.player--0`).classList.toggle('player--active');
  // reset scores
  resetGame();
});
