import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Crypto Tracker
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full transition-all hover:bg-opacity-30 hover:shadow-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/top300"
              className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full transition-all hover:bg-opacity-30 hover:shadow-md"
            >
              Top 300
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
