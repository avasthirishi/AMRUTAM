// src/pages/Shop.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "@fontsource/playfair-display/700.css"; // 700 = bold
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../contexts/SearchContext';
import { products as hairCareProducts } from './Hair.jsx';
import { products as skinCareProducts } from './Skin.jsx';
import { products as bonesCareProducts } from './Bones.jsx';
import { products as immunityCareProducts } from './immunity.jsx';
import { products as gutHealthProducts } from './Digestion.jsx';
import { title } from 'framer-motion/client';

// --- Static Data for Summer Collection ---
const summerProducts = [
  {
    image: '/images/shop1.png',
    title: 'Amrutam Kuntal Care Hair Spa | Do-it-yourself Hair Treatment',
    price: '₹649.00 - 200 ml',
    reviews: 52,
    rating: 4.5,
  },
  {
    image: '/images/shop2.png',
    title: 'Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair',
    price: '₹649.00 - 200 ml',
    reviews: 52,
    rating: 4.5,
  },
  {
    image: '/images/shop3.png',
    title: "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: '₹649.00 - 200 ml',
    reviews: 52,
    rating: 4.5,
  },
  {
    image: '/images/shop4.jpg',
    title: 'Patanjali Ayurvedic Neem & Tulsi Face Wash | For All Skin Types',
    price: '₹120.00 - 150 ml',
    reviews: 120,
    rating: 4.2,
  },
  {
    image: '/images/shop5.jpg',
    title: 'Kapiva Aloe Vera & Ashwagandha Juice | For Immunity & Stress Relief',
    price: '₹450.00 - 1 L',
    reviews: 89,
    rating: 4.7,
  },
  {
    image: '/images/shop6.jpg',
    title: 'Gynoveda Ayurvedic Calcium & Vitamin D3 Tablets | For Strong Bones',
    price: '₹700.00 - 60 tablets',
    reviews: 397,
    rating: 4.8,
  },
  {
    image: '/images/shop7.jpg',
    title: 'Dr. Ortho Ayurvedic Pain Relief Oil | Joint & Muscle Care',
    price: '₹265.00 - 120 ml',
    reviews: 3055,
    rating: 4.2,
  },
  {
    image: '/images/shop8.jpg',
    title: 'Khadi Natural Apricot & Walnut Face Scrub | For Everyday Glow',
    price: '₹175.00 - 120 g',
    reviews: 4172,
    rating: 4.5,
  },
  {
    image: '/images/shop9.jpg',
    title: 'Amrutam Madhu Amrit | Sugar & Diabetes Control',
    price: '₹850.00 - 500 g',
    reviews: 156,
    rating: 4.6,
  },
];

// Merge all products for searching
const allProducts = [
  ...summerProducts,
  ...hairCareProducts,
  ...skinCareProducts,
  ...bonesCareProducts,
  ...immunityCareProducts,
  ...gutHealthProducts,
];

function ProductCard({ product, addToCart }) {
  return (
    <div className="flex-none w-60 border rounded-xl p-4 shadow-lg hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg w-full h-40 object-cover"
      />
      <h3 className="text-sm font-medium mt-2">{product.title}</h3>
      <p className="text-lg font-semibold">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

// --- Reusable ProductCarousel Component ---
const ProductCarousel = ({ title, products, addToCart }) => {
  
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 3;
  const navigate = useNavigate();

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - productsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + productsPerPage, products.length - productsPerPage)
    );
  };

  const handleAddToCartAndNavigate = (product) => {
    addToCart(product);
    navigate('/cart'); // redirect after adding
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i === filledStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-400">☆</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return <div className="flex text-sm">{stars}</div>;
  };

  return (
    <div className="relative py-12" style={{ background: "#FAF3E0" }}>
      {/* Title Section */}
      <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center mb-6">
        {title}
      </h2>

      <div className="flex items-center justify-center gap-4 relative">
        {/* Prev Button */}
        <button
          aria-label="Previous"
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`rounded-full bg-white p-3 shadow-md flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 ${
            startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:#DFDFC7'
          }`}
        >
          &#8592;
        </button>

        {/* Product Cards */}
        <div className="flex gap-4 w-full justify-center" style={{ background: "#FAF3E0" }}>
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="w-[300px] border rounded-xl p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-sm text-gray-600 mb-1">{product.title}</p>
                <div className="flex items-center space-x-1 my-2">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                <button
                  onClick={() => handleAddToCartAndNavigate(product)}
                  className="mt-4 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
                >
                  <span className="text-2xl font-bold">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          aria-label="Next"
          onClick={handleNext}
          disabled={startIndex + productsPerPage >= products.length}
          className={`rounded-full bg-white p-3 shadow-md flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 ${
            startIndex + productsPerPage >= products.length
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};
// --- End of Reusable Component ---

export default function Shop() {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch(); // live text from header
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlSearch = (queryParams.get("search") || "").trim();

  const effectiveSearch = (searchQuery || "").trim() !== "" ? searchQuery.trim() : urlSearch;

  useEffect(() => {
    if ((searchQuery || "").trim() === "" && urlSearch) {
      const url = new URL(window.location.href);
      url.searchParams.delete("search");
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchQuery, urlSearch]);

  const categories = [
    { name: "All", icon: "/icons/all.svg", products: allProducts, title: "All Products"},
    { name: "Hair", icon: "/icons/hair.svg", products: hairCareProducts, title: "Hair Care Products" },
    { name: "Skin", icon: "/icons/skin.svg", products: skinCareProducts , title: "Skin Care Products" },
    { name: "Digestion", icon: "/icons/digestion.svg", products: gutHealthProducts , title: "Gut Health & Digestion Care" },
    { name: "Bones", icon: "/icons/bones.svg", products: bonesCareProducts, title: "Bones & Muscle Care" },
    { name: "Immunity", icon: "/icons/immunity.svg", products: immunityCareProducts, title: "Immunity Care Products" },
    { name: "More", icon: "/icons/more.svg", products: [] },
  ];

  if (!searchQuery.trim()) {
    return (
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        {categories.map((category, index) => (
          <ProductCarousel
            key={index}
            title={category.title}
            products={category.products}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
  }

  const filteredCategories = categories.map((category) => ({
    ...category,
    products: category.products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const categoryRoutes = {
    "All": "/",
    "Hair": "/hair",
    "Skin": "/skin",
    "Digestion": "/digestion",
    "Bones": "/bones",
    "Immunity": "/immunity",
    "More": "/more",
  };

  const searchResults = effectiveSearch
    ? allProducts.filter((p) =>
        p.title.toLowerCase().includes(effectiveSearch.toLowerCase())
      )
    : [];

  return (
    <div className="p-6 min-h-screen" style={{ background: "#FAF3E0" }}>
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(categoryRoutes[cat.name] || "/")}
          >
            <div className="w-20 h-20 rounded-full bg-[#F6F6E7] border border-[#E2E2C7] flex items-center justify-center shadow-sm hover:shadow-md transition">
              <img src={cat.icon} alt={cat.name} className="w-12 h-12 object-contain" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>

      <hr className="my-10 border-t border-gray-200" />

      {/* Search Results Section */}
      {effectiveSearch ? (
        <ProductCarousel
          title={
            <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
              Search Results for "{effectiveSearch}"
            </h2>
          }
          products={searchResults}
          addToCart={addToCart}
        />
      ) : (
        <>
        </>
      )}
    </div>
  );
}
