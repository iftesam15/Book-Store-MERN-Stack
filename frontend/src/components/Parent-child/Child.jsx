import React, { useState } from "react";

const Child = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    sendDataToParent(newValue);
  };
  return (
    <div>
      <input
        className=" border  text-center "
        type="text"
        placeholder="Write here"
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default Child;
