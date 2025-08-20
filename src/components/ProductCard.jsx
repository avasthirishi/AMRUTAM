import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

/**
 * A reusable component to display a single product as a card.
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing title, description, price, and image.
 * @param {string} props.product.title - The title of the product.
 * @param {string} props.product.description - The description of the product.
 * @param {string} props.product.price - The price of the product.
 * @param {string} props.product.image - The URL of the product image.
 */
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover object-center"
      />

      {/* Product Details */}
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {product.description}
        </p>
        <span className="text-lg font-bold text-gray-800 mb-4">
          {product.price}
        </span>
        
        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 hover:bg-green-700 transition"
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
