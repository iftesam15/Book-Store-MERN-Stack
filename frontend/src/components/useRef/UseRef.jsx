import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const counteRef = useRef(0);
  const handleIncreament = () => {
    setCount(count + 1);
    counteRef.current++; // Update the ref value directly
    console.log("Current count using ref:", counteRef.current);
    console.log("state:", count);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus(); // Focus on input field when component mounts
  }, []);
  const handleFocus = () => {
    inputRef.current.focus(); // Focus on input field when button is clicked
  };
  const handleDecreament = () => {
    setCount(count - 1);
  };
  return (
    <div>
      Count: {count}
      <br />
      Countref : {counteRef.current}
      <br />
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <br />
      <input
        className="border border-red-300 rounded-lg me-2"
        type="text"
        ref={inputRef}
        placeholder="type something ..."
      />
      <button className="bg-blue-300 p-1" onClick={handleFocus}>
        focus
      </button>
    </div>
  );
}
