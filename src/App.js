import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Top100 from './pages/Top100';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top100" element={<Top100 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
