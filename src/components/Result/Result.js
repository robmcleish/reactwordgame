import React from 'react';


function Result({ status, numberOfGuesses, answer, resetGame }) {
  const className = `banner ${status}`;
  const message = status === 'happy'
    ? `Congratulations! Got it in ${numberOfGuesses} guesses.`
    : `Sorry, the correct answer was ${answer}`;
  return (
    <div className={className}>
      <form onSubmit={(event) => {
        event.preventDefault();
        resetGame();
      }}>
        <span>{message}</span>
        <br />
        <button type="submit">Restart Game</button>
      </form>
    </div>
  );
}

export default Result;
