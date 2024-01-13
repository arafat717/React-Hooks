import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setHidden((prev) => !prev)}
      >
        {hidden ? "show" : "hide"}
      </button>
      {!hidden && <Counter></Counter>}
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(counter);
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h1>{counter}</h1>;
};

export default UseEffectExample;
