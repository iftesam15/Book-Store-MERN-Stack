import React from "react";
import chainContext from "./ChainContext";
const Person = () => {
  const user = chainContext();
  return (
    <div>
      <h1>Welcome to person , {user.name}</h1>
      <p>Your email person: {user.email}</p>
      <p>Subscribed person: {user.isSubscribed ? "true" : "false"}</p>
    </div>
  );
};

export default Person;
