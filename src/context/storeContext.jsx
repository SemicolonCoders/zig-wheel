import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const itemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        // If it exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      // Filter out the item with the given id
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    // Provide cartItems, addToCart, and removeFromCart functions to the context
    <storeContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
