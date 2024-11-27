import React, { useContext } from "react";
import { CounterContext, useCounterProvider } from "./Counter";

const SingleCount = () => {
  const { count, setCount } = useCounterProvider(CounterContext);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  const handleDecreament = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleIncreament}> Increament</button>
      <button onClick={handleDecreament}> Decreament</button>
    </div>
  );
};

export default SingleCount;
