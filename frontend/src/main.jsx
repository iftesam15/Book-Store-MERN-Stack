import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import UserContextProvider from "./components/context/UserContextProvider.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n config
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <UserContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </UserContextProvider>
        </SnackbarProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
