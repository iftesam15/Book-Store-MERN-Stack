import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function userUserContext() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error("use UserConxtext must be used with Dashboard Context");
  }
  return user;
}
