import React, { useState } from "react";
import doctorsData from "../mock-doctors.json";

const FindDoctors = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const doctorsPerPage = 5;

  // Filter doctors
  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(search.toLowerCase()) &&
      doctor.specialty.toLowerCase().includes(specialty.toLowerCase()) &&
      doctor.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  // Pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Find Doctors</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Filter by specialty..."
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Doctors List */}
      <div className="grid gap-4">
        {currentDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="p-4  rounded shadow cursor-pointer hover:shadow-lg transition"
            onClick={() => {
              setSelectedDoctor(doctor);
              setShowForm(false);
            }}
          >
            <h2 className="text-lg font-semibold">{doctor.name}</h2>
            <p className="text-sm text-gray-600">{doctor.specialty}</p>
            <p className="text-sm">{doctor.hospital}</p>
            <p className="text-sm text-gray-500">{doctor.location}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1 bg-white rounded shadow">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal for Doctor Details */}
      {selectedDoctor && !showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold">🩺{$selectedDoctor.name}</h2>
            <p className="text-gray-600">{selectedDoctor.specialty}</p>
            <p className="mt-2">{selectedDoctor.bio}</p>
            <p className="mt-2 text-sm text-gray-500">
              {selectedDoctor.specialty_details.work_experience}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {selectedDoctor.specialty_details.education}
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}

      {/* Appointment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
              <input type="date" className="w-full p-2 border rounded" />
              <textarea
                placeholder="Reason for visit"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindDoctors;
