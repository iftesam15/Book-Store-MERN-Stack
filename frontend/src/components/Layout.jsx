import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext";
import useLogout from "../hooks/useLogout";

const Layout = () => {
  const { user } = useContext(UserContext);
  const { logout } = useLogout();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Book Store
          </Link>
          <div className="flex gap-x-4 items-center">
            {user ? (
              <>
                <Link to="/books/create">Create Book</Link>
                <Link to="/dark">Dark Mode</Link>
                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Profile
                </Link>
                <span className="text-gray-300">Welcome, {user.username}</span>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <Link to="/books/create">Create Book</Link>
                <Link to="/dark">Dark Mode</Link>
                <Link
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
