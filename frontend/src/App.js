import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import TemplateFiller from './pages/TemplateFiller';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateFiller/>} />
      </Routes>
    </Router>
  );
};

export default App;
