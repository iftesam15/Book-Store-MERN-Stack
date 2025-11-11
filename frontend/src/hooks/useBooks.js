import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";

// Query keys
export const bookKeys = {
  all: ["books"],
  lists: () => [...bookKeys.all, "list"],
  list: (filters) => [...bookKeys.lists(), { filters }],
  details: () => [...bookKeys.all, "detail"],
  detail: (id) => [...bookKeys.details(), id],
};

// Fetch all books
export const useBooks = () => {
  return useQuery({
    queryKey: bookKeys.lists(),
    queryFn: async () => {
      const response = await api.get("/books");
      return response.data.data;
    },
  });
};

// Fetch single book
export const useBook = (id) => {
  return useQuery({
    queryKey: bookKeys.detail(id),
    queryFn: async () => {
      const response = await api.get(`/books/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

// Create book mutation
export const useCreateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (bookData) => {
      const response = await api.post("/books", bookData);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch books list
      queryClient.invalidateQueries({ queryKey: bookKeys.lists() });
    },
  });
};

// Update book mutation
export const useUpdateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      const response = await api.put(`/books/${id}`, data);
      return response.data;
    },
    onSuccess: (data, variables) => {
      // Invalidate and refetch books list and specific book
      queryClient.invalidateQueries({ queryKey: bookKeys.lists() });
      queryClient.invalidateQueries({ queryKey: bookKeys.detail(variables.id) });
    },
  });
};

// Delete book mutation
export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/books/${id}`);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch books list
      queryClient.invalidateQueries({ queryKey: bookKeys.lists() });
    },
  });
};

