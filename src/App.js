import { LandingPage } from "./LandingPage";
import { Rules } from "./Rules";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  function rulesToggle() {
    setActive((prevState) => !prevState);
    console.log("active");
  }

  return (
    <>
      <LandingPage rulesToggle={rulesToggle} />
      <Rules active={active} rulesToggle={rulesToggle} />
    </>
  );
}

export default App;
