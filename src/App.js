import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Top300 from './pages/Top300';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home favorites={favorites} />} />
            <Route path="/top300" element={<Top300 favorites={favorites} setFavorites={setFavorites} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
