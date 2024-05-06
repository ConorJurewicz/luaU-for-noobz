import './App.css';
import Navbar from './components/Navbar';
import Learn from './Pages/Learn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn">Learn</Link></li>=
        </ul>
      </div>
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/" element={
          <div>
            <header className="App-header">
              Welcome
            </header>
            {/* Home page content goes here */}
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;