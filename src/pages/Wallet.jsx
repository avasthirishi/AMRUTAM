import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const navigate = useNavigate();
  const [balance] = useState(1250); // Example balance

  const [transactions] = useState([
    { id: 1, type: "Consultation Fee", amount: -500, date: "18 Aug 2025", status: "Completed" },
    { id: 2, type: "Medicine Purchase", amount: -350, date: "16 Aug 2025", status: "Completed" },
    { id: 3, type: "Refund - Cancelled Appointment", amount: +500, date: "15 Aug 2025", status: "Refunded" },
    { id: 4, type: "Wallet Top-up", amount: +1000, date: "12 Aug 2025", status: "Success" },
    { id: 5, type: "Consultation Fee", amount: -400, date: "10 Aug 2025", status: "Completed" },
    { id: 6, type: "Medicine Purchase", amount: -250, date: "07 Aug 2025", status: "Completed" },
    { id: 7, type: "Wallet Top-up", amount: +800, date: "05 Aug 2025", status: "Success" },
    { id: 8, type: "Consultation Fee", amount: -300, date: "02 Aug 2025", status: "Completed" },
  ]);

  const getAmountColor = (amt) => (amt > 0 ? "text-green-600" : "text-red-600");

  return (
    <div className="p-8">
      {/* Wallet Balance */}
      <div className="border rounded-lg p-6 shadow-sm mb-6 text-center">
        <h1 className="text-lg font-medium text-gray-600">Wallet Balance</h1>
        <p className="text-3xl font-bold text-green-700 mt-2">₹{balance}</p>
        <button
          onClick={() => navigate("/add-money")}
          className="mt-4 px-5 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition"
        >
          Add Money
        </button>
      </div>

      {/* Transactions */}
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="flex justify-between items-center border rounded-lg p-4 shadow-sm"
          >
            <div>
              <p className="font-medium">{txn.type}</p>
              <p className="text-sm text-gray-500">{txn.date}</p>
            </div>
            <div className="text-right">
              <p className={`text-lg font-semibold ${getAmountColor(txn.amount)}`}>
                {txn.amount > 0 ? `+₹${txn.amount}` : `-₹${Math.abs(txn.amount)}`}
              </p>
              <p className="text-sm text-gray-500">{txn.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wallet;
