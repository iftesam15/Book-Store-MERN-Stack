import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : state.count + 1,
        error: hasError ? "Count cannot exceed 5" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : state.count - 1,
        error: hasError ? "Count must be greater than zero" : null,
      };
    }
    case "reset": {
      return { count: 0, error: null };
    }
    default:
      return state;
  }
}
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: "Hello world",
  });
  return (
    <div>
      <div>Count {state.count}</div>
      {state.error && <div className=" text-red-600 ">{state.error}</div>}
      <button className="mb-2" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button className="mb-2" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button className="mb-2" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}
// Similar to use State
// use reducer follows the redux pattern
