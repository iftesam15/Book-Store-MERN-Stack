import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

export function userUserContext() {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error("use UserConxtext must be used with Dashboard Context");
  }
  return user;
}
