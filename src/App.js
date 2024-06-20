// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//     const [score, setScore] = useState(0);
//     const [timer, setTimer] = useState(60);
//     const [gameOver, setGameOver] = useState(true);
//     const [molePosition, setMolePosition] = useState(null);

//     useEffect(() => {
//         let countdown;
//         let moleInterval;
//         if (!gameOver) {
//             countdown = setInterval(() => {
//                 setTimer(prevTimer => {
//                     if (prevTimer <= 1) {
//                         clearInterval(countdown);
//                         setGameOver(true);
//                         alert(`Game Over!\nYour final score: ${score}`);
//                         setScore(0);
//                         setTimer(60);
//                         return 60;
//                     }
//                     return prevTimer - 1;
//                 });
//             }, 1000);

//             moleInterval = setInterval(() => {
//                 if (!gameOver) {
//                     const random = Math.floor(Math.random() * 9);
//                     setMolePosition(random);
//                 }
//             }, 1000);
//         }

//         return () => {
//             clearInterval(countdown);
//             clearInterval(moleInterval);
//         };
//     }, [gameOver, score]);

//     const startGame = () => {
//         if (!gameOver) return;
//         setGameOver(false);
//         setScore(0);
//         setTimer(60);
//     };

//     const endGame = () => {
//         setGameOver(true);
//         alert(`Game Ended!\nYour final score: ${score}`);
//         setScore(0);
//         setTimer(60);
//     };

//     const handleMoleClick = () => {
//         if (!gameOver) {
//             setScore(score + 1);
//             setMolePosition(null);  
//         }
//     };

//     return (
//         <div className="App">
//             <div className="game-info">
//                 <div id="score">Score: {score}</div>
//                 <div id="timer">Time: {timer}s</div>
//             </div>
//             <button id="startButton" onClick={startGame} disabled={!gameOver}>
//                 Start Game
//             </button>
//             <button id="endButton" onClick={endGame} disabled={gameOver}>
//                 End Game
//             </button>
//             <div className="game-container">
//                 {Array.from({ length: 9 }).map((_, index) => (
//                     <div
//                         key={index}
//                         className={`hole ${molePosition === index ? 'mole' : ''}`}
//                         onClick={molePosition === index ? handleMoleClick : undefined}
//                         role="button"
//                         aria-label={`Hole ${index + 1}`}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default App;





import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(60);
    const [gameOver, setGameOver] = useState(true);
    const [molePosition, setMolePosition] = useState(null);
    const [clickedMole, setClickedMole] = useState(false);

    useEffect(() => {
        let countdown;
        let moleInterval;
        if (!gameOver) {
            countdown = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer <= 1) {
                        clearInterval(countdown);
                        setGameOver(true);
                        alert(`Game Over!\nYour final score: ${score}`);
                        setScore(0);
                        setTimer(60);
                        return 60;
                    }
                    return prevTimer - 1;
                });
            }, 1000);

            moleInterval = setInterval(() => {
                if (!gameOver) {
                    const random = Math.floor(Math.random() * 9);
                    setMolePosition(random);
                    setClickedMole(false);
                }
            }, 1300);
        }

        return () => {
            clearInterval(countdown);
            clearInterval(moleInterval);
        };
    }, [gameOver, score]);

    const startGame = () => {
        if (!gameOver) return;
        setGameOver(false);
        setScore(0);
        setTimer(60);
    };

    const endGame = () => {
        setGameOver(true);
        alert(`Game Ended!\nYour final score: ${score}`);
        setScore(0);
        setTimer(60);
    };

    const handleMoleClick = () => {
        if (!gameOver) {
            setScore(score + 1);
            setClickedMole(true);
            setTimeout(() => setMolePosition(null), 500);
        }
    };

    return (
        <div className="App">
            <h1>Tap-Mole</h1>
            <div className="game-info">
                <div id="score">Score: {score}</div>
                <div id="timer">Time: {timer}s</div>
            </div>
            <div className="buttons">
                <button id="startButton" onClick={startGame} disabled={!gameOver}>
                    Start Game
                </button>
                <button id="endButton" onClick={endGame} disabled={gameOver}>
                    End Game
                </button>
            </div>
            <div className="game-container">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className={`hole ${molePosition === index ? 'mole' : ''} ${clickedMole && molePosition === index ? 'clicked' : ''}`}
                        onClick={molePosition === index ? handleMoleClick : undefined}
                        role="button"
                        aria-label={`Hole ${index + 1}`}
                    ></div>
                ))}
            </div>
            <footer>
                <p>Created by Your Name. <a href="https://www.github.com/Aakashkr97" target="_blank" rel="noopener noreferrer">Visit my site</a></p>
            </footer>
        </div>
    );
};

export default App;

