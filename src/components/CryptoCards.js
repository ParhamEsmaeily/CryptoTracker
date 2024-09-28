import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusIcon } from '@heroicons/react/solid'; // Make sure to import PlusIcon

const CryptoCard = ({ id, name, symbol, price, image }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [cadPrice, setCadPrice] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
          setCryptoData(response.data);
          
          // Fetch USD to CAD exchange rate
          const exchangeRate = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
          const usdToCad = exchangeRate.data.rates.CAD;
          
          // Calculate CAD price
          const usdPrice = response.data.market_data.current_price.usd;
          setCadPrice(usdPrice * usdToCad);
        } catch (error) {
          console.error('Error fetching data:', error);
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
      <p className="text-2xl font-bold text-center mt-2">
        ${(price || cryptoData?.market_data?.current_price?.usd)?.toFixed(2)}
      </p>
      {cadPrice && (
        <p className="text-sm text-gray-500 text-center">
          {cadPrice.toFixed(2)} (CAD$)
        </p>
      )}
    </div>
  );
};

const FavoritesSection = ({ favorites }) => {
  return (
    <div>
      {[0, 1].map((index) => (
        favorites[index] ? (
          <CryptoCard 
            key={favorites[index].id} 
            id={favorites[index].id}
            name={favorites[index].name}
            symbol={favorites[index].symbol}
            price={favorites[index].current_price}
            image={favorites[index].image}
          />
        ) : (
          <div key={`empty-${index}`} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
            <PlusIcon className="h-12 w-12 text-gray-400" />
          </div>
        )
      ))}
    </div>
  );
};

export default CryptoCard;
export { FavoritesSection };