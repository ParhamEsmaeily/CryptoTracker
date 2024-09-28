import React from 'react';
import CryptoCard from '../components/CryptoCards';
import { PlusIcon } from '@heroicons/react/solid';
const Home = ({ favorites, usdToCadRate }) => {
  const defaultCryptos = ['bitcoin', 'ethereum', 'nano'];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Cryptocurrencies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {defaultCryptos.map((id) => (
          <CryptoCard key={id} id={id} usdToCadRate={usdToCadRate} />
        ))}
        {[0, 1].map((index) => (
          favorites[index] ? (
            <CryptoCard 
              key={favorites[index].id} 
              id={favorites[index].id}
              name={favorites[index].name}
              symbol={favorites[index].symbol}
              price={favorites[index].current_price}
              cadPrice={favorites[index].cad_price}
              image={favorites[index].image}
              usdToCadRate={usdToCadRate}
            />
          ) : (
            <div key={`empty-${index}`} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
              <PlusIcon className="h-12 w-12 text-gray-400" />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Home;