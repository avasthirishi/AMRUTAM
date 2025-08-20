import React from 'react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const totalPrice = cartItems.reduce((total, item) => {
    // Extract numerical price from the string (e.g., "₹649.00 - 200 ml")
    const price = parseFloat(item.price.replace('₹', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="p-6 min-h-screen" style={{ background: "#FAF3E0" }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between  p-4 rounded-lg shadow-md mb-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.title, item.quantity - 1)}
                  className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="font-semibold text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.title, item.quantity + 1)}
                  className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </div>
          ))}
          
          <div className="mt-8 p-6  rounded-lg shadow-lg text-right">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: ₹{totalPrice.toFixed(2)}
            </h3>
            <button className="mt-4 bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}