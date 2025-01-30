import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <div className="flex gap-x-4">
            <Link to="/books/create">Create Book</Link>
            <Link to="/dark">Dark Mode</Link>
          </div>
        </div>
      </nav>
      <Outlet /> {/* This will render the child route's content */}
    </div>
  );
};

export default Layout;
