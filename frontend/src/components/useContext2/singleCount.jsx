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
    <div className="flex gap-2">
      <button
        className="bg-green-400 p-2 rounded-md"
        onClick={handleIncreament}
      >
        {" "}
        Increament
      </button>
      <button className="bg-red-400 p-2 rounded-md" onClick={handleDecreament}>
        {" "}
        Decreament
      </button>
    </div>
  );
};

export default SingleCount;
