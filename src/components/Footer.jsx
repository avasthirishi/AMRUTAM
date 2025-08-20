import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // For internal navigation

const Footer = () => {
  // Social Media Links
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/AmrutamOfficial/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/amrutamofficial" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCZTlecy-WlwAh-ZZpv94PIQ" },
    { icon: <FaTwitter />, url: "https://x.com/amrutamofficial" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/amrutam-pharma/" },
    { icon: <FaPinterestP />, url: "https://in.pinterest.com/amrutamofficial/" },
  ];

  return (
    <footer className="bg-[#d8e2db] py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Get in Touch */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Get in touch</h3>
          <p className="mb-2">support@amrutam.global</p>
          <p className="mb-2">
            Amrutam Pharmaceuticals Pvt Ltd.,
            <br /> Chitragupt Ganj, Nai Sadak, Lashkar, <br /> Gwalior - 474001
          </p>
          <p className="mb-4">+91 9713171999</p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 - Information */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about-us" className="hover:text-green-700">
                About Us
              </Link>
            </li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Privacy Policy for Mobile Apps</li>
            <li>Shipping, Return and Cancellation Policy</li>
            <li>International Delivery</li>
            <li>For Businesses, Hotels, and Resorts</li>
          </ul>
        </div>

        {/* Column 3 - Newsletter */}
        <div>
          <h3 className="font-semibold text-green-800 mb-3">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 border border-green-800 rounded-full px-4 py-2 outline-none"
            />
            <button className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
