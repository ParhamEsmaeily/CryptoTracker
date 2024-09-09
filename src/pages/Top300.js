import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoTable from '../components/CryptoTable';

const Top300 = () => {
  const [cryptos, setCryptos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: itemsPerPage,
            page: currentPage,
            sparkline: false,
          },
        });
        setCryptos(response.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again later. Wait aproximate 1 minute to refresh. This is due to API FETCH LIMITATIONS');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Now this effect runs when currentPage changes

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Top 300 Cryptocurrencies</h1>
      <CryptoTable cryptos={cryptos} />
      <div className="flex justify-center mt-8">
        {[1, 2, 3].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 px-4 py-2 border rounded ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Top300;
