import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context/UserContext";
import useLogout from "../hooks/useLogout";
import ProtectedHeader from "./ProtectedHeader";

function Profile() {
  const { user } = useContext(UserContext);
  const { logout } = useLogout();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Not Logged In
          </h1>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  };

  return (
    <div>
      <ProtectedHeader />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              User Profile
            </h1>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <label className="text-sm font-medium text-gray-500">
                  Username
                </label>
                <p className="mt-1 text-lg text-gray-900">{user.username}</p>
              </div>

              <div className="border-b pb-4">
                <label className="text-sm font-medium text-gray-500">
                  Email
                </label>
                <p className="mt-1 text-lg text-gray-900">{user.email}</p>
              </div>

              <div className="border-b pb-4">
                <label className="text-sm font-medium text-gray-500">
                  User ID
                </label>
                <p className="mt-1 text-sm text-gray-600 font-mono">
                  {user.id || user._id}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
