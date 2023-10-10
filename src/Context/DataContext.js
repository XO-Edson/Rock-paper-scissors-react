import React, { createContext, useEffect, useState } from "react";
import rockIcon from "../images/icon-rock.svg";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";

const GameData = createContext({});

export const DataProvider = ({ children }) => {
  const [rules, setRules] = useState(false);
  const [move] = useState([
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
      return;
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
    <GameData.Provider
      value={{
        scoreCount,
        rules,
        rulesToggle,
        move,
        startGame,
        selectedMove,
        clearSelectedMove,
        house,
        gameStatus,
      }}
    >
      {children}
    </GameData.Provider>
  );
};

export default GameData;
