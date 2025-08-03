import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Submariner } from './pages/Submariner';
import { Datejust } from './pages/Datejust';
import { Oyster } from './pages/Oyster';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submariner" element={<Submariner />} />
            <Route path="/datejust" element={<Datejust />} />
            <Route path="/oyster" element={<Oyster />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;