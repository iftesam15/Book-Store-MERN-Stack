import React, { useContext } from "react";
import { DashboardContext, userUserContext } from "./Context";

export default function Sidebar() {
  const user = userUserContext(DashboardContext);
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Your email: {user.email}</p>
      <p>Subscribed: {user.isSubscribed ? "true" : "false"}</p>
    </div>
  );
}
