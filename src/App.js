import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Top300 from './pages/Top300';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [usdToCadRate, setUsdToCadRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setUsdToCadRate(response.data.rates.CAD);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();
  }, []);
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home favorites={favorites} usdToCadRate={usdToCadRate} />} />
            <Route path="/top300" element={<Top300 favorites={favorites} setFavorites={setFavorites} usdToCadRate={usdToCadRate} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
