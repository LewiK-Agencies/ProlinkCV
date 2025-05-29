import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<div>Home Page (Coming in Phase 2)</div>} />
        <Route path="/ats-checker" element={<div>ATS Checker (Coming in Phase 5)</div>} />
        <Route path="/privacy" element={<div>Privacy Policy (Static Page)</div>} />
        <Route path="/terms" element={<div>Terms of Service (Static Page)</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
