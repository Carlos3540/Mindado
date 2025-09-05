import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from "/src/assets/mindado-logo.png";

import './App.css'


function App() {
  const [roll, setRoll] = useState(1);
  const [highScore, setHighScore] = useState(() => {
    return Number(localStorage.getItem("highScore")) || 0;
  });

  const lanzar = () => {
    const nuevo = Math.floor(Math.random() * 6) + 1;
    setRoll(nuevo);
    if (nuevo > highScore) {
      setHighScore(nuevo);
      localStorage.setItem("highScore", nuevo);
    }
  };

  return (
    <div className="app">
       <img src={logo} alt="Logo del juego" className="logo" />

      <div className={`dice face-${roll}`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={`dot d${i + 1}`}></span>
        ))}
      </div>

      <button className="btn" onClick={lanzar}>
        Lanzar dado
      </button>

      <p className="score">
        Último: <strong>{roll}</strong> | Mejor tirada:{" "}
        <strong>{highScore}</strong>
      </p>
    </div>
  );
}

export default App;
