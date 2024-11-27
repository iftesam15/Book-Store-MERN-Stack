/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DashboardContext } from "./Context";
import Dashboard from "./Dashboard";

export default function UseContext() {
  const [user, setUser] = useState({
    isSubscribed: false,
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const [food, setFood] = useState({
    name: "pizza",
    price: 10.99,
    quantity: 5,
    totalPrice: 54.95,
  });
  const contextValue = {
    user,
    setUser,
    food,
    setFood,
  };
  return (
    <div>
      <DashboardContext.Provider value={contextValue}>
        <Dashboard></Dashboard>
      </DashboardContext.Provider>
    </div>
  );
}
