import { createContext, useContext, useState } from "react";

export const CounterContext = createContext(undefined);

export const useCounterProvider = () => {
  const count = useContext(CounterContext);
  if (count === undefined) {
    throw new Error("useCounterProvider must be used with CounterContext");
  }
  return count;
};
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
