import React from "react";
import UseMyContext from "./UseChainContext";
import chainContext, { MyContext } from "./ChainContext";

export default function Sidebar() {
  const user = chainContext();
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Your email: {user.email}</p>
      <p>Subscribed: {user.isSubscribed ? "true" : "false"}</p>
    </div>
  );
}
