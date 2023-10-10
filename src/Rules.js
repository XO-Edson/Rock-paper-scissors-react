import React, { useContext } from "react";
import RulesImage from "./images/image-rules.svg";
import CloseIcon from "./images/icon-close.svg";
import GameData from "./Context/DataContext";

export const Rules = () => {
  const { rules, rulesToggle } = useContext(GameData);

  return (
    <div className={`${rules ? "active" : "rulesBackground"} rulesBackground`}>
      <div className="rules">
        <div className="rulesMenu">
          <h1>Rules</h1>
          <div className="cross" onClick={rulesToggle}>
            <img src={CloseIcon} alt="close icon" />
          </div>
        </div>

        <p>Double-click to pick move</p>
        <main>
          <article>
            <img src={RulesImage} alt="rules" />
          </article>
        </main>
      </div>
    </div>
  );
};
