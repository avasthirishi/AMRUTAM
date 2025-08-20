import React, { useState } from "react";
import { motion } from "framer-motion";

const LabTest = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  const checkups = [
    { name: "General Health Checkup", img: "https://img.icons8.com/color/96/health-checkup.png" },
    { name: "Eye Checkup", img: "https://img.icons8.com/color/96/ophthalmology.png" },
    { name: "Ear Checkup", img: "https://img.icons8.com/color/96/hearing.png" },
    { name: "Bone Density Test", img: "https://img.icons8.com/color/96/skeleton.png" },
    { name: "Thyroid Checkup", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCyO0ojwjKjgdzK24YQYkGbomRk8T8lIPfQ&s" },
    { name: "Hair Transplant Consultation", img: "https://img.icons8.com/color/96/barber-chair.png" },
    { name: "Dental Checkup", img: "https://img.icons8.com/color/96/tooth.png" },
    { name: "Heart Checkup", img: "https://img.icons8.com/color/96/heart-health.png" },
    { name: "Diabetes Screening", img: "https://img.icons8.com/color/96/diabetes.png" },
    { name: "Skin & Allergy Test", img: "https://img.icons8.com/color/96/skin.png" },
    { name: "Immunity Checkup", img: "https://img.icons8.com/color/96/health-checkup.png" },
    { name: "Kidney Function Test", img: "https://img.icons8.com/color/96/kidney.png" },
    { name: "Liver Function Test", img: "https://img.icons8.com/color/96/liver.png" },
    { name: "Lung Function Test", img: "https://img.icons8.com/color/96/lungs.png" },
    { name: "Blood Pressure Monitoring", img: "https://img.icons8.com/color/96/stethoscope.png" },
  ];

  return (
    <div className="p-6 md:p-12">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Available Medical Checkups
      </motion.h1>

      {/* Checkups List */}
      {!selectedTest ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checkups.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="shadow-md rounded-2xl border p-4 flex flex-col items-center justify-between"
            >
              <img src={item.img} alt={item.name} className="w-20 h-20 mb-3" />
              <span className="text-lg font-semibold text-center">{item.name}</span>
              <button
                onClick={() => setSelectedTest(item)}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Booking Form */
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto p-6 border rounded-2xl shadow-md"
        >
          <div className="flex flex-col items-center mb-6">
            <img src={selectedTest.img} alt={selectedTest.name} className="w-20 h-20 mb-3" />
            <h2 className="text-2xl font-semibold">{selectedTest.name}</h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Age</label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Enter your age"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Additional Notes</label>
              <textarea
                rows="3"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Write your health concerns here..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirm Booking
            </motion.button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => setSelectedTest(null)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Back to Tests
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LabTest;
