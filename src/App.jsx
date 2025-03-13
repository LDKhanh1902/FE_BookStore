import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AuthorsPage from "./Pages/AuthorsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import UploadImage from "./Pages/UploadImage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<AuthorsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/uploadimage" element={<UploadImage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
