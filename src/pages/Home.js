import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoCard from '../components/CryptoCards';

const Home = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum,nano',
          order: 'market_cap_desc',
          per_page: 3,
          page: 1,
          sparkline: false,
        },
      });
      setCryptos(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Cryptocurrencies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            name={crypto.name}
            symbol={crypto.symbol}
            price={crypto.current_price}
            image={crypto.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;