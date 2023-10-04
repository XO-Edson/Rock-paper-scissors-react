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
  const [selectedMove, setSelectedMove] = useState("");
  const [house, setHouse] = useState("");
  const [gameStatus, setGameStatus] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);

  /* Starts game */
  const startGame = (e) => {
    if (e.target.className === move[0].name) {
      setSelectedMove(move[0].name);
    } else if (e.target.className === move[1].name) {
      setSelectedMove(move[1].name);
    } else {
      setSelectedMove(move[2].name);
    }
    handleWin(); /* The "handleWin" function is executed immediately a move is selected */
    return selectedMove;
  };

  /* The handle win function to check for wins */
  const handleWin = () => {
    if (selectedMove === house) {
      console.log("Tie");
      return gameStatus;
    }
    if (selectedMove === "") {
      return undefined;
    }

    if (
      (selectedMove === "rock" && house === "scissors") ||
      (selectedMove === "scissors" && house === "paper") ||
      (selectedMove === "paper" && house === "rock")
    ) {
      setScoreCount((prevScore) => prevScore + 1); /* Count increases */
      setGameStatus(true); /*Game status changes */
      return console.log("Win!!");
    } else {
      setGameStatus(false);
      return console.log("Loser!!!!!");
    }
  };

  /* To track whenever changes are made on any selected moves */
  useEffect(() => {
    setHouse(move[Math.floor(Math.random() * move.length)]);
  }, [selectedMove, move]);

  /* Handles clearing of "selectedMove" whenever "PLAY AGAIN" is clicked*/
  const clearSelectedMove = () => {
    setSelectedMove("");
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
          path={`/${selectedMove}`}
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
