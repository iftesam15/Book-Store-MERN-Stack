import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./components/Profile";
import { useTranslation } from "react-i18next";
import DarkMode from "./pages/DarkMode";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

// Helper component to wrap protected routes
const ProtectedRouteWrapper = ({ children }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  // Protected routes configuration
  const protectedRoutes = [
    { path: "/", element: <Home /> },
    { path: "/books/create", element: <CreateBook /> },
    { path: "/books/details/:id", element: <ShowBook /> },
    { path: "/books/edit/:id", element: <EditBook /> },
    { path: "/books/delete/:id", element: <DeleteBook /> },
    { path: "/profile", element: <Profile /> },
  ];

  return (
    <Routes>
      {/* Routes with Layout (header) - Only dark mode */}
      <Route element={<Layout />}>
        <Route path="/dark" element={<DarkMode />} />
      </Route>

      {/* Auth routes without Layout (no header) */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* Protected routes without Layout (no header) */}

      {protectedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRouteWrapper>{route.element}</ProtectedRouteWrapper>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
