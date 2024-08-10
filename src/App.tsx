import { useState } from "react";
import View from "./components/View";
import "./App.css";
import { randomChoose, twoRandomChoose } from "./utils/functions";
import PreferToPlay from "./components/PreferToPlay";
import PlayerChoose from "./components/PlayerChoose";

function App() {
  const [leftPlayer, setLeftPlayer] = useState(0); // Initialize left player score to 0
  const [rightPlayer, setRightPlayer] = useState(0); // Initialize right player score to 0
  const [result, setResult] = useState(-1); // Initialize result to -1 (null)
  const [start, setStart] = useState(false); // Initialize start flag to false
  const [manuelUse, setManuelUse] = useState(-1); // Initialize manual use flag to -1 (null)

  const StartPaying = async () => {
    // Reset the result
    setResult(-1);
    // Set the start flag to true Once
    setStart(true);
    // Check if manual use is enabled
    manuelUse === 1
      ? // If manual use is enabled, call the randomChoose function for the right player
        randomChoose({
          left: leftPlayer,
          setRight: setRightPlayer,
          setResult,
        })
      : // If manual use is not enabled, call the twoRandomChoose function to generate two random numbers
        twoRandomChoose({
          setLeft: setLeftPlayer,
          setRight: setRightPlayer,
          setResult,
        });
  };

  return (
    <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-sky-500 h-screen flex justify-center items-center flex-col gap-10 ">
      <View leftPlayer={leftPlayer} rightPlayer={rightPlayer} winner={result} />
      {manuelUse === 1 && <PlayerChoose setLeftPlayer={setLeftPlayer} />}
      <PreferToPlay
        StartPaying={StartPaying}
        result={result}
        start={start}
        setManuelUse={setManuelUse}
        manuelUse={manuelUse}
        left={leftPlayer}
      />
    </div>
  );
}

export default App;
