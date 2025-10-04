import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import StandardDetail from './pages/StandardDetail';
import PrincipleDetail from './pages/PrincipleDetail';
import Comparison from './pages/Comparison';
import Insights from './pages/Insights';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/explorer/:standard" element={<StandardDetail />} />
            <Route path="/explorer/:standard/:id" element={<PrincipleDetail />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;