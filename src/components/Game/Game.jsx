import React, { useState, useEffect } from "react";
import dogImg from "../../assets/dog.png"; 
import "./Game.css";

export default function Game() {
  const [gameState, setGameState] = useState("ready"); 
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [lane, setLane] = useState(1); 
  const [countdown, setCountdown] = useState(3);
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  const questions = [
    { q: "2 + 2", options: [3, 4, 5], answer: 4 },
    { q: "5 - 3", options: [1, 2, 3], answer: 2 },
    { q: "3 × 3", options: [6, 9, 12], answer: 9 }
  ];

  useEffect(() => {
    const handleResize = () => setIsPortrait(window.innerHeight > window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (gameState === "countdown" && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === "countdown" && countdown === 0) {
      setGameState("playing");
    }
  }, [gameState, countdown]);

  const startGame = () => {
    setCountdown(3);
    setGameState("countdown");
  };


  const moveUp = () => setLane((prev) => Math.max(0, prev - 1));
  const moveDown = () => setLane((prev) => Math.min(2, prev + 1));
  const moveForward = () => {
    const currentQ = questions[questionIndex];
    if (currentQ.options[lane] === currentQ.answer) {
      setScore((s) => s + 1);
    }
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((q) => q + 1);
    } else {
      setGameState("gameover");
    }
  };

  
  if (isPortrait) {
    return (
      <div className="rotate-screen">
        <h2>Please rotate your device</h2>
        <div className="rotate-icon">📱</div>
        <p>Play in landscape mode</p>
      </div>
    );
  }

  return (
    <div className="game-container">
      
      {gameState === "ready" && (
        <div className="overlay">
          <h1>Are you ready?</h1>
          <button className="start-btn" onClick={startGame}>Start</button>
        </div>
      )}
      {gameState === "countdown" && (
        <div className="overlay">
          <h1 className="countdown">{countdown}</h1>
        </div>
      )}
      {gameState === "gameover" && (
        <div className="overlay">
          <h1>Game Over!</h1>
          <p>Your Score: {score}</p>
          <button
            className="start-btn"
            onClick={() => {
              setScore(0);
              setQuestionIndex(0);
              setLane(1);
              setGameState("ready");
            }}
          >
            Play Again
          </button>
        </div>
      )}

     
      <div className="header">
        <h2>Math Race</h2>
        <p>Score: {score}</p>
      </div>

      
      <div className="track">
        {questions[questionIndex].options.map((opt, idx) => (
          <div key={idx} className={`lane ${lane === idx ? "active" : ""}`}>
            <div className="answer">{opt}</div>
          </div>
        ))}

        
        <img
          src={dogImg}
          alt="dog"
          className="dog"
          style={{ top: lane * 100 + 40, left: 20 }}
        />
      </div>

     
      <div className="question">{questions[questionIndex].q}</div>

      
      <div className="controls">
        <button className="btn" onClick={moveUp}>↑</button>
        <div className="row">
          <button className="btn" onClick={moveDown}>↓</button>
          <button className="btn" onClick={moveForward}>→</button>
        </div>
      </div>
    </div>
  );
}
