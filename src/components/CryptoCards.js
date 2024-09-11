import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoCard = ({ id, name, symbol, price, image }) => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
          setCryptoData(response.data);
        } catch (error) {
          console.error('Error fetching crypto data:', error);
        }
      };
      fetchData();
    }
  }, [id]);

  if (id && !cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 hover:border hover:border-blue-500">
      <img src={image || cryptoData?.image?.large} alt={name || cryptoData?.name} className="w-16 h-16 mx-auto mb-2" />
      <h2 className="text-xl font-semibold text-center">{name || cryptoData?.name}</h2>
      <p className="text-gray-600 text-center">{(symbol || cryptoData?.symbol)?.toUpperCase()}</p>
      <p className="text-2xl font-bold text-center mt-2">${(price || cryptoData?.market_data?.current_price?.usd)?.toFixed(2)}</p>
    </div>
  );
};

export default CryptoCard;