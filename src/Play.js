import React from "react";
import { VersusSection } from "./VersusSection";

export const Play = ({ selectedMove }) => {
  return (
    <main>
      {selectedMove ? (
        <section className="versus">
          <VersusSection selectedMove={selectedMove} />
        </section>
      ) : (
        console.log("error")
      )}
    </main>
  );
};
