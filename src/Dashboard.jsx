import React, { useState } from 'react';

function Dashboard({ items, onAddItem, onToggleBought, onDeleteItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Raw Bazar');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    onAddItem(name, quantity, category);
    setName('');
    setQuantity('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">My Shopping Planner</h2>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Item name (e.g., Rice, Eggs)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Qty (e.g., 2kg, 1 Dozen)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full md:w-32 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Raw Bazar">Raw Bazar</option>
          <option value="Grocery">Grocery</option>
          <option value="Toiletries">Toiletries</option>
          <option value="Fruits">Fruits</option>
        </select>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold transition">
          Add
        </button>
      </form>

      {/* Grocery List Item */}
      <div className="bg-white rounded-lg shadow p-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No items in your planner yet. Add some!</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={item.bought}
                    onChange={() => onToggleBought(item.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <div>
                    <span className={`text-lg font-medium ${item.bought ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      {item.name} ({item.quantity})
                    </span>
                    <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm p-1"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
