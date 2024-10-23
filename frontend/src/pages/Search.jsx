import React, { memo } from "react";

function Search({ testChange }) {
  console.log("search is rendered");

  return (
    <div>
      <input
        className="border border-red-300 p-2"
        type="text"
        placeholder="Search users..."
        onChange={(e) => testChange(e.target.value)}
      />
    </div>
  );
}
export default memo(Search);
