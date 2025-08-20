import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMoney() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("UPI");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    alert(`₹${amount} added via ${method}`);
    navigate("/Wallet"); // Redirect back to wallet after adding money
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Add Money to Wallet</h1>
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg p-6 shadow-md bg-white space-y-5"
      >
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Enter Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium mb-1">Select Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
          >
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/Wallet")}
            className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700"
          >
            Add to Wallet
          </button>
        </div>
      </form>
    </div>
  );
}
