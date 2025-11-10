import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserContext from "../components/context/UserContext";
import Spinner from "../components/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  // Show spinner while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  // Redirect to login if not authenticated, saving the attempted location
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
