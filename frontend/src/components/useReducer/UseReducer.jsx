import React, { useReducer, useState } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Post = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" });

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  return (
    <div>
      <button
        className="bg-red-400 p-2 font-semibold  rounded-sm  hover:bg-red-500 "
        onClick={handleFetch}
      >
        {state.loading ? "wait..." : "Fetch the post"}
      </button>
      <p>{!state.error && state.post?.title}</p>
      <span>{!state.loading && state.error && "something went wrong"}</span>
    </div>
  );
};

export default Post;
