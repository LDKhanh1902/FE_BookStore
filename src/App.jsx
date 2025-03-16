import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import HomePage from "./Pages/HomePage";
import AuthorsPage from "./Pages/AuthorsPage";
<<<<<<< Updated upstream
import CategoriesPage from "./Pages/CategoriesPage";
import PublishersPage from './Pages/PublishersPage';
import Navbar from "./Components/Navbar";
=======
import CategoriesPage from './Pages/CategoriesPage'; "./Pages/CategoriesPage";
import Navbar from './Components/Navbar';
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
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
=======
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AuthorsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Router>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
