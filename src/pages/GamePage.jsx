import React, { useState, useEffect } from 'react';
import './GamePage.css';

const GamePage = () => {
  const [animals, setAnimals] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    fetch('/animals.json')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error loading animals:', error));
  }, []);

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Get random animals for the quiz
  const getRandomAnimals = (count) => {
    const shuffled = [...animals].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Generate a question
  const generateQuestion = () => {
    if (animals.length < 4) return null;

    const correctAnimal = animals[Math.floor(Math.random() * animals.length)];
    const options = getRandomAnimals(3).map(animal => animal.name);
    
    // Make sure correct answer is included and no duplicates
    if (!options.includes(correctAnimal.name)) {
      options[Math.floor(Math.random() * 3)] = correctAnimal.name;
    }

    const questionTypes = [
      {
        question: `What is the natural habitat of the ${correctAnimal.name}?`,
        options: ['Jungle', 'Rainforest', 'Desert', 'Ocean'],
        correctAnswer: correctAnimal.habitat
      },
      {
        question: `What does the ${correctAnimal.name} primarily eat?`,
        options: ['Plants', 'Meat', 'Both', 'Insects'],
        correctAnswer: correctAnimal.diet === 'Herbivore' ? 'Plants' : 
                       correctAnimal.diet === 'Carnivore' ? 'Meat' : 'Both'
      },
      {
        question: `Which conservation status does the ${correctAnimal.name} have?`,
        options: ['Least Concern', 'Near Threatened', 'Vulnerable', 'Endangered', 'Critically Endangered'],
        correctAnswer: correctAnimal.conservationStatus
      },
      {
        question: `Where would you most likely find a ${correctAnimal.name}?`,
        options: ['Africa', 'Asia', 'South America', 'Australia'],
        correctAnswer: 'South America' // Simplified for demo
      }
    ];

    return questionTypes[Math.floor(Math.random() * questionTypes.length)];
  };

  const questions = Array(5).fill().map(() => generateQuestion()).filter(q => q !== null);

  if (!gameStarted) {
    return (
      <div className="game-page">
        <div className="game-intro">
          <h1>Jungle Animal Quiz</h1>
          <p>Test your knowledge about jungle animals with this fun quiz!</p>
          <button onClick={startGame} className="start-button">Start Quiz</button>
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="game-page">
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>You scored {score} out of {questions.length}</p>
          <div className="score-message">
            {score === questions.length ? 
              '🎉 Perfect! You\'re a jungle expert!' :
              score >= questions.length / 2 ?
              '👍 Good job! You know your jungle animals!' :
              '🌿 Keep learning about these amazing creatures!'}
          </div>
          <button onClick={startGame} className="play-again-button">Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-page">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion]?.question}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion]?.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswerClick(option === questions[currentQuestion]?.correctAnswer)}
            className="answer-button"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="score-tracker">
        Score: {score}
      </div>
    </div>
  );
};

export default GamePage;