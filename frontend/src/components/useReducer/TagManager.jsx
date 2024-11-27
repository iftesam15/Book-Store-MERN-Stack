import { useReducer, useState } from "react";
import { INTIAL_TAG_STATE, tagReucer } from "./TagReducer";

const TagManager = () => {
  const [state, dispatch] = useReducer(tagReucer, INTIAL_TAG_STATE);
  const [input, setInput] = useState("");
  const handleAddTags = () => {
    if (!input.trim()) {
      console.log("INdise here");

      dispatch({ type: "SET_ERROR", payload: "Input cannot be empty" });
      setInput("");
      return;
    }
    dispatch({ type: "ADD_TAGS", payload: input });
    setInput("");
  };
  const clearError = (e) => {
    dispatch({ type: "SET_ERROR", payload: null });
    setInput(e);
  };
  const handleRemoveTags = (index) => {
    console.log(index);
    console.log(state);
    dispatch({ type: "REMOVE_TAG", payload: index });
  };
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Tag Manager</h1>

      <textarea
        className="w-full p-3 border-2 border-dashed border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-gray-800  "
        value={input}
        onChange={(e) => clearError(e.target.value)}
        placeholder="Enter tags separated by commas or spaces"
        rows="4"
        cols="30"
        style={{ width: "100%", marginBottom: "10px" }}
      ></textarea>

      <button
        className="bg-sky-400 p-2 rounded-md"
        onClick={handleAddTags}
        style={{ display: "block", marginBottom: "20px" }}
      >
        Add Tags
      </button>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <div className="flex gap-2 items-center">
        <h2>Tags:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {state.tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleRemoveTags(index)}
              style={{
                padding: "5px 10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              }}
            >
              {tag} &times;
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TagManager;
