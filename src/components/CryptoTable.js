import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const CryptoTable = ({ cryptos, favorites, onToggleFavorite }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Favorite</th>
            <th className="py-3 px-6 text-left">Rank</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Symbol</th>
            <th className="py-3 px-6 text-right">Price</th>
            <th className="py-3 px-6 text-right">Market Cap</th>
            <th className="py-3 px-6 text-right">24h Change</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {cryptos.map((crypto) => (
            <tr key={crypto.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">
                <button 
                  onClick={() => onToggleFavorite(crypto)}
                  disabled={['bitcoin', 'ethereum', 'nano'].includes(crypto.id)}
                >
                  <StarIcon 
                    className={`h-5 w-5 ${
                      favorites.some(fav => fav.id === crypto.id) 
                        ? 'text-yellow-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{crypto.market_cap_rank}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <img className="w-6 h-6 rounded-full mr-2" src={crypto.image} alt={crypto.name} />
                  <span>{crypto.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">{crypto.symbol.toUpperCase()}</td>
              <td className="py-3 px-6 text-right">${crypto.current_price.toFixed(2)}</td>
              <td className="py-3 px-6 text-right">${crypto.market_cap.toLocaleString()}</td>
              <td className={`py-3 px-6 text-right ${crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;