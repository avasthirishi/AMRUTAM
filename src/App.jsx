import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import FindDoctors from './pages/FindDoctors';
import LabTests from './pages/LabTests';
import Shop from './pages/Shop';
import Forum from './pages/Forum';
import AboutUs from './pages/AboutUs';
import Skin from './pages/Skin.jsx';
import Hair from './pages/Hair.jsx';
import Digestion from './pages/Digestion.jsx';
import Immunity from './pages/immunity.jsx';
import Bones from './pages/Bones.jsx';
import Cart from './pages/Cart'; 
import { CartProvider } from './contexts/CartContext';
import AddMoney from './pages/AddMoney.jsx'; // Assuming you have an AddMoney component
import { SearchProvider } from "./contexts/SearchContext";
import Login from './pages/Login.jsx'; // Assuming you have a Login component
import Wallet from './pages/Wallet.jsx'; // Assuming you have a Wallet component
import Chats from './chats.jsx'; // Importing the Chats component
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden" style={{ background: "#FAF3E0" }}>
      {/* Wrap the entire application with the CartProvider.
        This ensures that components like Header and all the route pages
        have access to the cart context.
      */}
      <CartProvider>
        <SearchProvider>
        <Header />
        <main className="flex-1 w-full px-2 sm:px-4 md:px-8 max-w-screen-2xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/digestion" element={<Digestion />} />
            <Route path="/immunity" element={<Immunity />} />
            <Route path="/bones" element={<Bones />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-money" element={<AddMoney />} />
            <Route path="*" element={<Forum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/chats" element={<Chats />} />
          </Routes>
        </main>
          <Footer />
        </SearchProvider>
      </CartProvider>
    </div>
  );
}
