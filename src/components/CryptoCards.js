import React from 'react';

const CryptoCard = ({ name, symbol, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-16 h-16 mx-auto mb-2" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-gray-600 text-center">{symbol.toUpperCase()}</p>
      <p className="text-2xl font-bold text-center mt-2">${price.toFixed(2)}</p>
    </div>
  );
};

export default CryptoCard;