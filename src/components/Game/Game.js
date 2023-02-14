import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessesList from '../GuessesList';
import InputField from '../InputField';
import Result from '../Result';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('');
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  function resetGame() {
    setGuesses([]);
    setStatus('');
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
  }

  function handleGuess(input) {
    const nextGuesses = [...guesses, input];
    setGuesses(nextGuesses);
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('sad');
    }
    else if (input === answer) {
      setStatus('happy');
    }
  }

  return <>
    <GuessesList guesses={guesses} answer={answer} />
    {
      status === ''
        ? <InputField handleGuess={handleGuess} />
        : <Result status={status} numberOfGuesses={guesses.length} answer={answer} resetGame={resetGame} />
    }
  </>;
}

export default Game;
