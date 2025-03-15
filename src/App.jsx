import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import HomePage from "./Pages/HomePage";
import AuthorsPage from "./Pages/AuthorsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import PublishersPage from './Pages/PublishersPage';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/publishers" element={<PublishersPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
