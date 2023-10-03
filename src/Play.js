import React from "react";
import { VersusSection } from "./VersusSection";

export const Play = ({ selectedMove, clearSelectedMove }) => {
  return (
    <main>
      {selectedMove ? (
        <section className="versus">
          <VersusSection
            selectedMove={selectedMove}
            clearSelectedMove={clearSelectedMove}
          />
        </section>
      ) : (
        console.log("error")
      )}
    </main>
  );
};
