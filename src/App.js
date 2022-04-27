import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Nav from './component/navBar';
import Quote from './component/Quote';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
