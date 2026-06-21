import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wide">🛒 GroceryFlow</div>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/analytics" className="hover:underline">Analytics</Link>
      </div>
    </nav>
  );
}

export default Navbar;
