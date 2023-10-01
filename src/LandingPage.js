import React from "react";

export const LandingPage = ({ rulesToggle }) => {
  return (
    <>
      <header>
        <div className="scoreCounter">
          <div className="moves">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <div className="scoreCount">
            <p>SCORE</p>
            <p>12</p>
          </div>
        </div>
      </header>
      <main>
        <article>
          <div className="rock">rock</div>
          <div className="paper">paper</div>
        </article>
        <div className="scissors">scissors</div>
      </main>
      <footer>
        <button onClick={rulesToggle}>RULES</button>
      </footer>
    </>
  );
};
