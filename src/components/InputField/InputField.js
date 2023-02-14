import React from 'react';

function InputField({ handleGuess }) {
  const [input, setInput] = React.useState('');

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        handleGuess(input);
        setInput('');
      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          placeholder='enter a 5 letter word'
          value={input}
          onChange={(event) => {
            setInput(event.target.value.toUpperCase())
          }}
        />
      </form>
    </div>
  );
}

export default InputField;
