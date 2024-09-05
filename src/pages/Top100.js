import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoTable from '../components/CryptoTable';

const Top100 = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
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
      <h1 className="text-3xl font-bold mb-8">Top 100 Cryptocurrencies</h1>
      <CryptoTable cryptos={cryptos} />
    </div>
  );
};

export default Top100;