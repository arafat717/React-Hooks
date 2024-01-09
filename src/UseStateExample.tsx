import React from "react";
import Another from "./Another";

type Tcounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: Tcounter) => {
  console.log("arafat");
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter((prvStatus) => prvStatus + 1)}
        className="btn"
      >
        increment
      </button>
      <button onClick={() => setCounter(0)} className="btn">
        reset
      </button>
      <button
        onClick={() => setCounter((prvStatus) => prvStatus - 1)}
        className="btn"
      >
        dicrement
      </button>
      <Another></Another>
    </div>
  );
};

export default UseStateExample;
