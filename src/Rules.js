import React from "react";

export const Rules = ({ active, rulesToggle }) => {
  return (
    <div className={`${active ? "active" : "rulesBackground"} rulesBackground`}>
      <div className="rules">
        <div className="rulesMenu">
          <h1>Rules</h1>
          <div className="cross" onClick={rulesToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <main>
          <article>
            <div className="rock">rock</div>
            <div className="paper">paper</div>
          </article>
          <div className="scissors">scissors</div>
        </main>
      </div>
    </div>
  );
};
