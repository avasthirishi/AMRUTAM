import React from "react";
import { FaLeaf, FaUserMd, FaVial, FaShoppingBasket, FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      {/* Main Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-3 flex items-center justify-center gap-3">
          <FaLeaf className="inline text-3xl text-green-700" />
          About Amrutam
        </h1>
        <p className="text-xl text-gray-800 text-center leading-relaxed">
          Empowering wellness through the timeless wisdom of Ayurveda, trusted experts, and holistic care experiences.
        </p>
      </div>

      {/* Vision / Mission Cards */}
      <div className="grid md:grid-cols-2 gap-12 mb-14">
        <div className=" p-7 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2 flex gap-2 items-center">
            <FaLeaf className="text-green-600" />
            Our Vision
          </h2>
          <p className="text-gray-700 text-base">
            To make Ayurveda accessible, modern, and deeply personal—helping individuals take charge of their well-being through natural remedies, mindful living, and positive daily habits.
          </p>
        </div>
        <div className=" p-7 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2 flex gap-2 items-center">
            <FaCheckCircle className="text-blue-600" />
            Our Mission
          </h2>
          <p className="text-gray-700 text-base">
            Bridging the gap between tradition and technology: providing trusted, authentic products and connecting you with certified doctors and wellness experts, every step of the way.
          </p>
        </div>
      </div>

      {/* What We Offer Advanced Cards */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-center mb-7 text-green-800">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className=" border rounded-2xl shadow-lg p-7 text-center hover:shadow-xl transition">
            <FaUserMd className="mx-auto text-4xl text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Expert Doctors & Ayurvedic Consultants</h3>
            <p className="text-gray-700 text-sm">
              Connect with certified professionals for personalized consultations, lifestyle plans, and expert care in Ayurveda and modern wellness.
            </p>
          </div>
          <div className=" border rounded-2xl shadow-lg p-7 text-center hover:shadow-xl transition">
            <FaVial className="mx-auto text-4xl text-blue-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Lab Tests & Diagnostics</h3>
            <p className="text-gray-700 text-sm">
              Get accurate diagnostic lab tests, health screenings, and holistic checkups to guide your wellness journey with confidence.
            </p>
          </div>
          <div className=" border rounded-2xl shadow-lg p-7 text-center hover:shadow-xl transition">
            <FaShoppingBasket className="mx-auto text-4xl text-yellow-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Curated Wellness Shop</h3>
            <p className="text-gray-700 text-sm">
              Browse our curated range of authentic Ayurvedic products, herbal supplements, and natural personal care essentials for everyday vitality.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights / Features */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-center mb-6 text-green-800">Why Choose Amrutam?</h2>
        <div className="flex flex-wrap gap-7 justify-center">
          <div className=" rounded-xl px-7 py-5 flex items-center gap-4 min-w-[220px] shadow">
            <FaCheckCircle className="text-xl text-green-700" />
            <span className="text-green-900 font-semibold">Authenticity Guaranteed</span>
          </div>
          <div className=" rounded-xl px-7 py-5 flex items-center gap-4 min-w-[220px] shadow">
            <FaCheckCircle className="text-xl text-blue-700" />
            <span className="text-blue-900 font-semibold">Certified Experts</span>
          </div>
          <div className=" rounded-xl px-7 py-5 flex items-center gap-4 min-w-[220px] shadow">
            <FaCheckCircle className="text-xl text-yellow-600" />
            <span className="text-yellow-900 font-semibold">Community Driven</span>
          </div>
          <div className=" rounded-xl px-7 py-5 flex items-center gap-4 min-w-[220px] shadow">
            <FaCheckCircle className="text-xl text-pink-600" />
            <span className="text-pink-900 font-semibold">Personalized Care</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-14  rounded-2xl p-10 shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-center text-green-900">Our Story & Values</h2>
        <p className="text-gray-700 text-base text-center">
          Amrutam started with a bold vision: to harmonize ancient wisdom with modern lives. Guided by trust, transparency, and innovation, we empower thousands across India to make informed health choices—whether seeking expert advice, picking pure products, or joining a vibrant wellness community.
        </p>
      </div>

      {/* Call to Action / Closing */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-3 text-green-800">🌿 Join the Amrutam Family</h2>
        <p className="text-lg text-gray-700 mb-4">
          Discover curated products, book expert appointments, and be part of a passionate community—your journey to a balanced, natural lifestyle begins here.
        </p>
        <a href="/shop" className="inline-block bg-green-700 text-white font-semibold rounded-lg px-7 py-3 shadow-lg hover:bg-green-900 transition text-lg">Explore Our Shop</a>
      </div>
    </div>
  );
}
