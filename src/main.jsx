import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AuthorsPage from "./Pages/AuthorsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import UploadImage from "./Pages/UploadImage";
import Header from "./Components/header";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AuthorsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/uploadimage" element={<UploadImage />} />
        </Routes>
      </Router>
    </div>
  </StrictMode>,
)
