import React from "react";

export const Footer = ({ rulesToggle }) => {
  return (
    <footer>
      <button onClick={rulesToggle}>RULES</button>
    </footer>
  );
};
