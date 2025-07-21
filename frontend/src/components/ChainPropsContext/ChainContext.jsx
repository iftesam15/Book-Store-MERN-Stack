import { createContext, useContext } from "react";

export const MyContext = createContext(undefined);

export default function ChainContext() {
  const user = useContext(MyContext);
  if (user === undefined) {
    throw new Error("Chain Context must be used with context");
  }
  return user;
}
