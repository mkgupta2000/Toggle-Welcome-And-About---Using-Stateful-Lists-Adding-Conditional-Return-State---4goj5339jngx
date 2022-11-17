import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [display1, setDisplay1] = useState(true);
  const [display2, setDisplay2] = useState(false);
  const displayHandler = () => {
    if (display1 === true) {
      setDisplay1(false);
      setDisplay2(true);
    } else {
      setDisplay1(true);
      setDisplay2(false);
    }
  };
  return (
    <div id="main">
      {display1 && (
        <div id="welcome-div">
          <h1>Welcome to Newton School!!</h1>
        </div>
      )}
      {display2 && (
        <div id="about-div">
          <h1>
            Newton School is a neo-university providing highly immersive tech
            learning to millions of students, to tap into new-age tech
            opportunities.
          </h1>
        </div>
      )}
      <button id="toggle" onClick={displayHandler}>
        Toggle
      </button>
    </div>
  );
};

export default App;
