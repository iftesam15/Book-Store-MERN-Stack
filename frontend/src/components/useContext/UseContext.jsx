import React, { useState } from "react";
import { DashboardContext } from "./Context";
import Dashboard from "./Dashboard";

export default function UseContext() {
  const [user] = useState({
    isSubscribed: false,
    name: "John Doe",
    email: "john.doe@example.com",
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard></Dashboard>
      </DashboardContext.Provider>
    </div>
  );
}
