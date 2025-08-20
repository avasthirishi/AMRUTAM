// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log credentials (replace with real auth later)
    console.log("Email:", email, "Password:", password);

    // Navigate to home/shop/dashboard after login
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF3E0] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-serif font-bold text-green-900 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-green-700 font-medium cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
