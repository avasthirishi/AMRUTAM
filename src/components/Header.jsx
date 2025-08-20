import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiPhone,
  FiShoppingCart,
  FiBell,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import search_background from "../assets/search_background.png";
import { useSearch } from "../contexts/SearchContext";
import { useCart } from "../contexts/CartContext";
import Forum from "../pages/Forum";
import Wallet from "../pages/Wallet";
// ✅ Define wallet and chat functions here or import them


export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { searchQuery, setSearchQuery } = useSearch();
  const { cartItems } = useCart();
  

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };
 const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");         // go to home page
    window.location.reload(); // reload page after navigation
  };
  return (
    <header className="w-full bg-[#FAF3E0] shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#2D2D2D] text-white text-sm sm:text-base py-3 px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-center sm:text-left font-medium">
          Your first 5 minutes instant call is free
        </span>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-700 transition"
        >
          <FiPhone className="text-white" />
          Try Instant Free Call Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-green-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-800">
              Instant Call Available
            </h3>
            <p className="text-sm mb-4">
              Your first five minute instant call is free. Ready to connect?
            </p>
            <a
              href="tel:+919826352321"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              Call Now
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 text-sm text-green-700 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Top Row */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6 gap-3">
        {/* Phone */}
        <div className="flex items-center gap-2 text-green-900 text-sm">
          <FiPhone className="text-lg" />
          <span>+91 9826352321</span>
        </div>

        {/* Logo */}
  
    <h1
      onClick={handleLogoClick}
      style={{ cursor: "pointer" }}
      className="text-3xl font-serif font-bold tracking-[0.2em] text-green-900 uppercase text-center sm:text-left"
    >
      AMRUTAM
    </h1>
  


        {/* Icons */}
        <div className="flex items-center gap-4 text-green-900 text-lg">
          {/* 💼 Wallet Icon */}
          <Link to="/wallet">
            <MdCreditCard  className="cursor-pointer hover:text-green-700 transition" />
          </Link>
          {/* 💬 Notification Icon */}
          <div className="relative">
             <Link to="/chats" className="cursor-pointer hover:text-green-700 transition">
            <FiBell  className="cursor-pointer hover:text-green-700 transition" />
          </Link>
        
            <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>

          {/* 🛒 Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* 👤 User/Login */}
          <Link to="/login">
            <FiUser className="cursor-pointer hover:text-green-700 transition" />
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#FAF3E0] border-t border-b border-gray-300">
        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
          <span className="font-medium text-green-900">Menu</span>
          <button
            className="text-2xl text-green-900"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            {navOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex justify-center gap-6 font-medium py-3 max-w-screen-xl mx-auto">
          {[
            { to: "/", label: "Home" },
            { to: "/find-doctors", label: "Find Doctors" },
            { to: "/lab-tests", label: "Lab Tests" },
            { to: "/shop", label: "Shop" },
            { to: "/forum", label: "Forum" },
            { to: "/about-us", label: "About Us" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-green-900 hover:text-green-700 hover:underline no-underline transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <div className="sm:hidden flex flex-col gap-2 px-4 pb-4 font-medium bg-[#FAF3E0] max-w-screen-xl mx-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/find-doctors", label: "Find Doctors" },
              { to: "/lab-tests", label: "Lab Tests" },
              { to: "/shop", label: "Shop" },
              { to: "/forum", label: "Forum" },
              { to: "/about-us", label: "About Us" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={() => setNavOpen(false)}
                className="text-green-900 hover:text-green-700 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Search Section */}
      <div
        className="w-full bg-cover bg-center py-10 sm:py-14 flex flex-col items-center"
        style={{ backgroundImage: `url(${search_background})` }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Shop
        </h2>
        <div className="flex w-full max-w-xs sm:max-w-lg bg-white rounded-full shadow-md overflow-hidden border border-gray-300">
          <input
            type="text"
            placeholder="Search for Kuntal Care"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 px-4 py-3 outline-none text-sm sm:text-base"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 px-6 text-white text-sm sm:text-base hover:bg-green-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
