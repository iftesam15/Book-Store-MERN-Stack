import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import { useTranslation } from "react-i18next";
import DarkMode from "./pages/DarkMode";
import Layout from "./components/Layout";
const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);
  return (
    <Routes>
      {/* Use Layout as the wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/dark" element={<DarkMode />} />
      </Route>
    </Routes>
  );
};

export default App;
