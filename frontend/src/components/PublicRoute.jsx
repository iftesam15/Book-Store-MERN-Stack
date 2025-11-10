import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "./context/UserContext";
import Spinner from "./Spinner";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  // Show spinner while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  // Redirect to home if already authenticated
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
