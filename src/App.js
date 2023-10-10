import { LandingPage } from "./LandingPage";
import { Rules } from "./Rules";

import { Play } from "./Play";
import { Routes, Route } from "react-router-dom";
import { ScoreHeader } from "./ScoreHeader";
import { Footer } from "./Footer";

import { DataProvider } from "./Context/DataContext";
import { useState } from "react";

function App() {
  const [selectedMove] = useState([]);

  return (
    <DataProvider>
      <div className="gameContainer">
        <ScoreHeader />

        <Routes>
          <Route
            path="/"
            element={
              /* Homepage/Landing-page */
              <LandingPage />
            }
          />
          {/* This page is where the game is played */}
          <Route path={`/${selectedMove.name}`} element={<Play />} />

          <Route path="*" element={<LandingPage />} />
        </Routes>

        <Rules />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
