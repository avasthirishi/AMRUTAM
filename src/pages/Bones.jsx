import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import the useCart hook

export const products = [
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Orthokey-Malt-edited-copy_2faa6bef-aef3-451d-b188-a0aa8074737a.jpg?v=1655352027&width=600',
    title: 'Amrutam Orthokey Gold Malt | Key Remedy for Orthopedic Management',
    rating: 4.5,
    reviews: '18 ratings',
    price: '₹749'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Orthokey-Pain-Oil_c23dff22-1fa9-4202-a2ed-25c556f19d55.jpg?v=1655352052&width=600',
    title: 'Amrutam Orthokey Oil | Useful in All Types of Body Pain',
    rating: 4.4,
    reviews: '76 ratings',
    price: '₹499'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Brahmi-1-scaled_243e86cd-f08d-4ad9-98a8-10860b2cd844.jpg?v=1655351023&width=600',
    title: 'Amrutam Brahmi Churna | Ayurvedic Stress Reliever',
    rating: 5,
    reviews: '498 ratings',
    price: '₹319'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Shankpushpi-min-scaled_9f217b51-24ba-41a8-8626-20de6ccbfc2c.jpg?v=1655352215&width=600',
    title: 'Amrutam Shankhpushpi Churna | Ayurvedic Anti-Depressant',
    rating: 5,
    reviews: '8 ratings',
    price: '₹329'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/OrthoOIl30ml.jpg?v=1661414531&width=600',
    title: 'Orthokey Pain Oil | Travel Pack',
    rating: 5,
    reviews: '1,498 ratings',
    price: '₹112'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Vata-Key-scaled.jpg?v=1655355044&width=600',
    title: 'Amrutam Vata Key Herbs',
    rating: 5,
    reviews: '98 ratings',
    price: '₹449'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Orthokey-Gold-Capsule-min_8f1428e1-b189-457d-b7ab-5ec234185331.jpg?v=1655351994&width=600',
    title: 'Amrutam Orthokey Gold Capsules | Key Factor in Orthopedic Management',
    rating: 5,
    reviews: '298 ratings',
    price: '₹999'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Orthokey-Balm-min-1_333cad69-7396-4ced-9e6d-412e023f96f1.jpg?v=1655352088&width=600',
    title: 'Amrutam Orthokey Pain Balm',
    rating: 4.5,
    reviews: '8 ratings',
    price: '₹599'
  },
  {
    image: 'https://amrutam.co.in/cdn/shop/products/Hair-Oil-scaled_dd178959-1f21-49c7-a077-2749d36d78a1.jpg?v=1655350672&width=600',
    title: "Amrutam's Kuntal Care Hair Oil | For Hair Revitalizing and Strengthening | Travel Pack",
    rating: 5,
    reviews: '1,498 ratings',
    price: '₹199'
  },
];

const videoLinks = [
  "https://amrutam.co.in/cdn/shop/files/quinn_fqix3x7wfhj0rr1pg79602xw.mp4#t=0.1",
  "https://amrutam.co.in/cdn/shop/files/quinn_l11dg8amcn888t5s9jxjr4lj.mp4#t=0.1",
  "https://amrutam.co.in/cdn/shop/files/quinn_al3930gova7jkpuoi3oewqiw.mp4#t=0.1",
  "https://amrutam.co.in/cdn/shop/files/quinn_gvoo9direedr4kvfqe46kufb.mp4#t=0.1",
  "https://amrutam.co.in/cdn/shop/files/quinn_wo3uzjafr904wz7pevggy6iy.mp4#t=0.1",
  "https://amrutam.co.in/cdn/shop/files/quinn_qwwfp9jzzp6wgarr0sn80jsf.mp4#t=0.1"
];

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

// ⭐ Reusable StarRating Component
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

const Bones = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [search, setSearch] = useState(""); // 🔎 state for search
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  // Filter products based on search
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // New handler to add to cart and then navigate
  const handleAddToCartAndNavigate = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="p-4 min-h-screen" style={{ background: "#FAF3E0" }}>
      {/* Categories Section (Top Menu) */}
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

      {/* Video Avatars */}
      <div className="flex items-center space-x-4 mb-6 justify-center">
        {videoLinks.map((link, idx) => (
          <div
            key={idx}
            className="w-18 h-18 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-black cursor-pointer"
            onClick={() => { setActiveVideo(link); setModalOpen(true); }}
          >
            <video className="w-full h-full object-cover" src={link} autoPlay loop muted playsInline />
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold z-50 bg-black bg-opacity-50 rounded-full px-4 py-1 hover:bg-opacity-80"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <video src={activeVideo} controls autoPlay className="max-w-full max-h-full rounded-lg shadow-lg bg-black" />
          </div>
        </div>
      )}

      {/* New Header for Hair Products */}
      <div className="flex items-center justify-center ">
  <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center">
   <br />
    Bones Products
    <br />
    <br />
  </h2>
</div>

      {/* Search Bar */}
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)} // ✅ update state
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-sm font-semibold text-gray-800 mb-1">{product.title}</p>
                <div className="flex items-center space-x-1 my-2">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{product.price}</p>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCartAndNavigate(product)}
                  className="mt-4 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
                >
                  <span className="text-2xl font-bold">+</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No products found.</p>
        )}
      </div>

      {/* Pagination */}
     
    </div>
  );
};

export default Bones;
