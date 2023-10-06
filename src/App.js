import { LandingPage } from "./LandingPage";
import { Rules } from "./Rules";
import { useEffect, useState } from "react";
import { Play } from "./Play";
import { Routes, Route } from "react-router-dom";
import { ScoreHeader } from "./ScoreHeader";
import { Footer } from "./Footer";
import rockIcon from "./images/icon-rock.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorsIcon from "./images/icon-scissors.svg";

function App() {
  const [rules, setRules] = useState(false);
  const [move, setMove] = useState([
    {
      name: "rock",
      icon: rockIcon,
    },
    {
      name: "paper",
      icon: paperIcon,
    },
    {
      name: "scissors",
      icon: scissorsIcon,
    },
  ]);
  const [selectedMove, setSelectedMove] = useState([]);
  const [house, setHouse] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  //console.log(selectedMove);

  /* Starts game */
  const startGame = (e) => {
    if (e.target.parentNode.className === move[0].name) {
      setSelectedMove(move[0]);
    } else if (e.target.parentNode.className === move[1].name) {
      setSelectedMove(move[1]);
    } else {
      setSelectedMove(move[2]);
    }

    return selectedMove;
  };

  /* The handle win function to check for wins */
  const handleWin = () => {
    if (
      (selectedMove.name === "rock" && house.name === "scissors") ||
      (selectedMove.name === "scissors" && house.name === "paper") ||
      (selectedMove.name === "paper" && house.name === "rock")
    ) {
      setGameStatus(true); /*Game status changes */
      setScoreCount((prevScore) => prevScore + 1); /* Count increases */
      return console.log("Win!!");
    } else {
      setGameStatus(false);
    }
  };

  /* To track whenever changes are made on any selected moves */
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setHouse(move[Math.floor(Math.random() * move.length)]);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setHouse([]);
    };
  }, [selectedMove, move]);

  /* When the app is mounted on initialization the "house" will be set by default to a random move.The useEffect below tracks wins once the "house" begins to change afterwards */
  useEffect(() => {
    handleWin();
  }, [house]);

  /* Handles clearing of "selectedMove" whenever "PLAY AGAIN" is clicked*/
  const clearSelectedMove = () => {
    setSelectedMove([]);
  };

  /* Rules button function */
  function rulesToggle() {
    setRules((prevState) => !prevState);
  }

  return (
    <div className="gameContainer">
      <ScoreHeader scoreCount={scoreCount} />

      <Routes>
        <Route
          path="/"
          element={
            /* Homepage/Landing-page */
            <LandingPage
              rulesToggle={rulesToggle}
              move={move}
              startGame={startGame}
              selectedMove={selectedMove}
            />
          }
        />
        {/* This page is where the game is played */}
        <Route
          path={`/${selectedMove.name}`}
          element={
            <Play
              selectedMove={selectedMove}
              clearSelectedMove={clearSelectedMove}
              house={house}
              gameStatus={gameStatus}
            />
          }
        />

        <Route
          path="*"
          element={
            <LandingPage
              rulesToggle={rulesToggle}
              move={move}
              startGame={startGame}
              selectedMove={selectedMove}
            />
          }
        />
      </Routes>

      <Rules rules={rules} rulesToggle={rulesToggle} />
      <Footer rulesToggle={rulesToggle} />
    </div>
  );
}

export default App;
