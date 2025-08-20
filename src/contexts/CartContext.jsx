import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adds a product to the cart, or increments its quantity if it already exists
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((item) => item.title === product.title);
      if (existingItem) {
        // If it exists, update its quantity
        return prevItems.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's a new item, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Removes a product completely from the cart
  const removeFromCart = (productTitle) => {
    setCartItems((prevItems) => prevItems.filter(item => item.title !== productTitle));
  };

  // Updates the quantity of a specific product
  const updateQuantity = (productTitle, newQuantity) => {
    if (newQuantity <= 0) {
      // If the new quantity is zero or less, remove the item
      removeFromCart(productTitle);
    } else {
      // Otherwise, update the quantity
      setCartItems((prevItems) => 
        prevItems.map((item) =>
          item.title === productTitle ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // The value provided to all components wrapped by this provider
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// A custom hook to make consuming the context easier and cleaner
export const useCart = () => {
  // It's a good practice to check if the hook is used inside a provider
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
