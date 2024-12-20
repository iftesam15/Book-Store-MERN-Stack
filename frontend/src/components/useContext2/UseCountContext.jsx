import React, { useContext } from "react";
import { CounterContext, useCounterProvider } from "./Counter";
import SingleCount from "./singleCount";
const UseCountContext = () => {
  const { count } = useCounterProvider(CounterContext);
  return (
    <div className="flex flex-col gap-2">
      <h1>Count is: {count}</h1>
      <SingleCount></SingleCount>
      <SingleCount></SingleCount>
      <SingleCount></SingleCount>
      <SingleCount></SingleCount>
      <SingleCount></SingleCount>
    </div>
  );
};

export default UseCountContext;
