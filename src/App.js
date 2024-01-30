import React, { useState, useEffect } from 'react';
import './App.css';
import jokesData from './jokes.json';

function App() {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showPunchline, setShowPunchline] = useState(false);

  const currentJoke = jokesData[currentJokeIndex];

  useEffect(() => {
    setUserAnswer('');
    setShowPunchline(false);
  }, [currentJoke]);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const showAnswer = () => {
    setShowPunchline(true);
  };

  const nextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokesData.length);
  };

  return (
    <div className="App">
      <h1>Joke App</h1>
      {currentJoke ? (
        <div>
          <p>{currentJoke.setup}</p>
          <input type="text" onChange={handleAnswerChange} value={userAnswer} />
          <button onClick={showAnswer}>Show Punchline</button>
          {showPunchline && <p>Punchline: {currentJoke.punchline}</p>}
          <button onClick={nextJoke}>Next Joke</button>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
}

export default App;
