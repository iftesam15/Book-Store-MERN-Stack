import React, { useState, useContext } from "react";
import UserContext from "./context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username });
  };
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-md border-2 border-blue-500 text-white "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
