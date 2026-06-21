import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Analytics from './Analytics';

function App() {
  // LocalStorage থেকে ডেটা লোড করা
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('grocery_items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // ডেটা চেঞ্জ হলেই লোকাল স্টোরেজে সেভ করা
  useEffect(() => {
    localStorage.setItem('grocery_items', JSON.stringify(items));
  }, [items]);

  // নতুন বাজার আইটেম যোগ করা
  const addItem = (name, quantity, category) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity,
      category,
      bought: false,
    };
    setItems([...items, newItem]);
  };

  // আইটেম কেনা হয়েছে কিনা (Toggle Bought)
  const toggleBought = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  // আইটেম ডিলিট করা
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  items={items}
                  onAddItem={addItem}
                  onToggleBought={toggleBought}
                  onDeleteItem={deleteItem}
                />
              }
            />
            <Route path="/analytics" element={<Analytics items={items} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
