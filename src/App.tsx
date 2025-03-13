
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import './App.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  // Home page route
        <Route path="/cart" element={<Cart />} />  // Cart page route
      </Routes>
    </Router>
  );
};

export default App;
