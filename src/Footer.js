import React, { useContext } from "react";
import GameData from "./Context/DataContext";

export const Footer = () => {
  const { rulesToggle } = useContext(GameData);
  return (
    <footer>
      <button onClick={rulesToggle}>RULES</button>
    </footer>
  );
};
