import { LandingPage } from "./LandingPage";
import { Rules } from "./Rules";
import { useState } from "react";
import { Play } from "./Play";
import { Routes, Route } from "react-router-dom";
import { ScoreHeader } from "./ScoreHeader";
import { Footer } from "./Footer";
import { VersusSection } from "./VersusSection";

function App() {
  const [active, setActive] = useState(false);
  const [move, setMove] = useState(["rock", "paper", "scissors"]);
  const [selectedMove, setSelectedMove] = useState("");

  const startGame = (e) => {
    if (e.target.className === move[0]) {
      setSelectedMove("rock");
    } else if (e.target.className === move[1]) {
      setSelectedMove("paper");
    } else {
      setSelectedMove("scissors");
    }
    console.log(selectedMove);
    return selectedMove;
  };

  function rulesToggle() {
    setActive((prevState) => !prevState);
  }

  return (
    <div className="gameContainer">
      <ScoreHeader />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              rulesToggle={rulesToggle}
              move={move}
              startGame={startGame}
              selectedMove={selectedMove}
            />
          }
        />
        <Route
          path={`/${selectedMove}`}
          element={<Play selectedMove={selectedMove} />}
        />
      </Routes>

      <Rules active={active} rulesToggle={rulesToggle} />
      <Footer rulesToggle={rulesToggle} />
    </div>
  );
}

export default App;
