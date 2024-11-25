import ChainContext, { MyContext } from "./ChainContext";
import MyBoard from "./MyBoard";
import React, { useState } from "react";
export default function UseMyContext() {
  const [user] = useState({
    isSubscribed: false,
    name: "John Doe",
    email: "john.doe@example.com",
  });
  return (
    <div>
      <MyContext.Provider value={user}>
        <MyBoard></MyBoard>
      </MyContext.Provider>
    </div>
  );
}
