import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../services/api";

// Login mutation
export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await authAPI.login(email, password);
      return response;
    },
  });
};

// Register mutation
export const useRegister = () => {
  return useMutation({
    mutationFn: async (userData) => {
      const response = await authAPI.register(userData);
      return response;
    },
  });
};

// Logout mutation
export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async (refreshToken) => {
      const response = await authAPI.logout(refreshToken);
      return response;
    },
  });
};

