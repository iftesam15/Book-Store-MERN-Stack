import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import UserContext from "../components/context/UserContext";
import { useLogoutMutation } from "./useAuth";

const useLogout = () => {
  const { logout: logoutContext, refreshToken } = useContext(UserContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const logoutMutation = useLogoutMutation();

  const logout = () => {
    // Always clear local state first
    logoutContext();

    // Call backend logout API to invalidate refresh token
    if (refreshToken) {
      logoutMutation.mutate(refreshToken, {
        onSuccess: () => {
          enqueueSnackbar("Logged out successfully", { variant: "success" });
          navigate("/login", { replace: true });
        },
        onError: (error) => {
          console.error("Logout error:", error);
          // Show warning if API call failed but logout still succeeded
          enqueueSnackbar("Logged out locally", { variant: "warning" });
          navigate("/login", { replace: true });
        },
      });
    } else {
      // No refresh token, just redirect
      enqueueSnackbar("Logged out successfully", { variant: "success" });
      navigate("/login", { replace: true });
    }
  };

  return { logout };
};

export default useLogout;
