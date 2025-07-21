import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n config

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <CartProvider>
          <App />
        </CartProvider>
      </SnackbarProvider>
    </I18nextProvider>
  </BrowserRouter>
);
