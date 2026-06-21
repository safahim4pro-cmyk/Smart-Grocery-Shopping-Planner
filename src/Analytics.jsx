import React from 'react';

function Analytics({ items }) {
  const totalItems = items.length;
  const boughtItems = items.filter((item) => item.bought).length;
  const pendingItems = totalItems - boughtItems;
  
  // শতাংশ হিসাব করা
  const completionRate = totalItems > 0 ? Math.round((boughtItems / totalItems) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Shopping Analytics</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-lg shadow text-center border-l-4 border-blue-500">
          <p className="text-sm font-medium text-gray-500 uppercase">Total Items</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{totalItems}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center border-l-4 border-green-500">
          <p className="text-sm font-medium text-gray-500 uppercase">Bought</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{boughtItems}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center border-l-4 border-yellow-500">
          <p className="text-sm font-medium text-gray-500 uppercase">Pending</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{pendingItems}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-lg font-semibold text-gray-700 mb-2">Shopping Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
        <p className="text-sm font-medium text-gray-600">{completionRate}% of your marketing is completed!</p>
      </div>
    </div>
  );
}

export default Analytics;
