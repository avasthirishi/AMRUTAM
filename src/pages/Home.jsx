import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import useCart to add to cart
import "@fontsource/playfair-display/700.css"; // 700 = bold

// --- Import Product Data from other files ---
// Note: Please ensure these file paths are correct in your project structure.
import { products as hairCareProducts } from './Hair.jsx';
import { products as skinCareProducts } from './Skin.jsx';
import { products as bonesCareProducts } from './Bones.jsx';
import { products as immunityCareProducts } from './immunity.jsx';
import { products as gutHealthProducts } from './Digestion.jsx';

// --- Static Data for Summer Collection (as it's only used here) ---
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
    title: 'Amrutam Nari Sondarya Malt | Complete Care For Women\'s Health And Beauty',
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

// --- Reusable ProductCarousel Component ---
const ProductCarousel = ({ title, products, addToCart }) => {
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 3;
  const navigate = useNavigate(); // Get the navigate function inside the component

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
    navigate('/cart'); 
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === filledStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ☆
            </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return <div className="flex text-sm">{stars}</div>;
  };

  return (
    <div className="relative py-12" style={{ background: "#FAF3E0" }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 px-6">{title}</h2>
      <div className="flex items-center justify-center gap-4 relative">
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

export default function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get the addToCart function from the context

  const categories = [
    { name: "All", icon: "/icons/all.svg" },
    { name: "Hair", icon: "/icons/hair.svg" },
    { name: "Skin", icon: "/icons/skin.svg" },
    { name: "Digestion", icon: "/icons/digestion.svg" },
    { name: "Bones", icon: "/icons/bones.svg" },
    { name: "Immunity", icon: "/icons/immunity.svg" },
    { name: "More", icon: "/icons/more.svg" },
  ];

  const categoryRoutes = {
    "All": "/",
    "Hair": "/hair",
    "Skin": "/skin",
    "Digestion": "/digestion",
    "Bones": "/bones",
    "Immunity": "/immunity",
    "More": "/more"
  };

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
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>

      <hr className="my-10 border-t border-gray-200" />

      {/* Summer Collection Section */}
    <ProductCarousel 
  title={
    <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
      Summer Collection
    </h2>
  }
  products={summerProducts} 
  addToCart={addToCart} 
/>


      <hr className="my-10 border-t border-gray-200" />

      {/* Hair Care Section */}
     <ProductCarousel 
  title={
    <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
      hair Products
    </h2>
  }
  products={hairCareProducts} 
  addToCart={addToCart} 
/>


      <hr className="my-10 border-t border-gray-200" />

      {/* Skin Care Section */}
      <ProductCarousel 
  title={
    <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
      Skin Care Products
    </h2>
  }
  products={skinCareProducts} 
  addToCart={addToCart} 
/>


      <hr className="my-10 border-t border-gray-200" />

      {/* Bones and Muscle Care Section */}
    <ProductCarousel 
  title={
    <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
      Bones & Muscle Care
    </h2>
  }
  products={bonesCareProducts} 
  addToCart={addToCart} 
/>


      <hr className="my-10 border-t border-gray-200" />

      {/* Immunity Care Section */}
     <ProductCarousel 
  title={
    <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
      Immunity Care Products
    </h2>
  }
  products={immunityCareProducts} 
  addToCart={addToCart} 
/>


      <hr className="my-10 border-t border-gray-200" />

      {/* Gut Health Section */}
   <ProductCarousel 
  title={
    <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
      Gut health & Digestion Care
    </h2>
  }
  products={gutHealthProducts} 
  addToCart={addToCart} 
/>

      {/* Download App Section */}
<div className="bg-[#FAF3E0] rounded-xl mt-16 px-4 py-10 md:py-14 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-visible">
  {/* Left Side Content */}
  <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B7A4B] mb-4">
      Download Amrutam Ayurveda App Now
    </h2>
    <p className="text-gray-700 mb-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
      The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! 
      Apart from mimicking the website, the app has added benefits
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-md mx-auto lg:mx-0">
      {[
        "Access To Prescriptions",
        "Track Health Efficiently",
        "Direct Chat With Doctors",
        "In-App Reminders For Consultations",
      ].map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-[#F6F6E7] border border-[#E2E2C7] rounded-lg px-3 sm:px-4 py-2 sm:py-3"
        >
          <img src="/icons/frame_logo.png" alt={feature} className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-[#2B7A4B] text-xs sm:text-sm font-medium">{feature}</span>
        </div>
      ))}
    </div>

    {/* Store Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/icons/playstore.png" alt="Get it on Google Play" className="h-10 sm:h-12 mx-auto lg:mx-0" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/icons/appstore.png" alt="Download on the App Store" className="h-10 sm:h-12 mx-auto lg:mx-0" />
      </a>
    </div>
  </div>

  {/* Right Side - Phone Mockup */}
  <div className="flex-1 flex items-center justify-center relative min-h-[260px] sm:min-h-[340px]">
    <img
      src="/icons/phone.png"
      alt="App Mockup"
      className="w-40 sm:w-64 md:w-80 z-20 relative"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
    />

    {/* Floating Stats */}
    <div className="absolute left-2 sm:left-0 lg:-left-24 top-6 sm:top-10 flex flex-col gap-4 sm:gap-6 z-30">
      <div className="rounded-lg px-3 py-2 shadow-md flex flex-col items-center " style={{ minWidth: 90 }}>
        <img src="/icons/time.png" alt="Engagement Time" className="w-12 sm:w-full h-auto object-contain mb-1" />
      </div>
      <div className="rounded-lg px-3 py-2 shadow-md flex flex-col items-center " style={{ minWidth: 90 }}>
        <img src="/icons/subscriber.png" alt="Subscribers" className="w-12 sm:w-full h-auto rounded-full mb-1" />
      </div>
    </div>

    {/* Decorative SVGs (hidden on mobile) */}
    <svg className="absolute left-10 top-2 w-12 sm:w-16 h-12 sm:h-16 text-[#2B7A4B] opacity-40 z-10 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
      <path d="M24 44C24 44 44 24 24 4" />
    </svg>
    <svg className="absolute left-10 bottom-2 w-12 sm:w-16 h-12 sm:h-16 text-[#2B7A4B] opacity-40 z-10 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
      <path d="M24 4C24 4 4 24 24 44" />
    </svg>
  </div>
</div>
</div>
  );    
}