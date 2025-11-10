import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import UserContext from "../components/context/UserContext";
import { authAPI } from "../services/api";

const useLogout = () => {
  const { logout: logoutContext, refreshToken } = useContext(UserContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const logout = async () => {
    try {
      // Call backend logout API to invalidate refresh token
      if (refreshToken) {
        await authAPI.logout(refreshToken);
      }

      // Clear local state and storage
      logoutContext();

      // Show success message
      enqueueSnackbar("Logged out successfully", { variant: "success" });

      // Redirect to login page
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);

      // Still logout locally even if API call fails
      // This ensures user can always logout
      logoutContext();

      // Show warning if API call failed but logout still succeeded
      enqueueSnackbar("Logged out locally", { variant: "warning" });

      // Redirect to login page
      navigate("/login", { replace: true });
    }
  };

  return { logout };
};

export default useLogout;
