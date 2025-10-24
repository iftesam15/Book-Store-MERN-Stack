"use client";

import { useState } from "react";

export function Boss() {
  const [message, setMessage] = useState("");

  const handleChildMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <Employee onSend={handleChildMessage} />
      <p>Child said: {message}</p>
    </>
  );
}

function Employee({ onSend }) {
  const sendMessage = (msg) => {
    onSend(msg);
  };

  return (
    <button onClick={() => sendMessage("Hello from Employee")}>
      Send Message
    </button>
  );
}
