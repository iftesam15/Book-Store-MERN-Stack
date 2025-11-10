import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext";
import useLogout from "../hooks/useLogout";

const ProtectedHeader = () => {
  const { user } = useContext(UserContext);
  const { logout } = useLogout();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Book Store
        </Link>
        <div className="flex gap-x-4 items-center">
          <Link
            to="/books/create"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Create Book
          </Link>
          <Link
            to="/profile"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Profile
          </Link>
          {user && (
            <span className="text-gray-300">Welcome, {user.username}</span>
          )}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ProtectedHeader;

