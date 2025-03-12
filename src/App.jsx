import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AuthorsPage from "./Pages/AuthorsPage";

function App() {
  return (
    <>
      <div>
        <AuthorsPage />
      </div>
    </>
  );
}

export default App;
