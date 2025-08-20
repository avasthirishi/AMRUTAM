import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- SVG Icons ---
// Replaced react-icons with inline SVGs to remove dependencies and fix the error.
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 group-hover:text-red-500 transition-colors"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ReplyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 group-hover:text-blue-500 transition-colors"
  >
    <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 group-hover:text-yellow-500 transition-colors"
  >
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>
);


// --- Placeholder Components ---
function Dashboard() {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Profile Summary */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Profile Overview</h2>
        <div className="flex items-center gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHsMV4ag851gA/profile-framedphoto-shrink_400_400/B56Zdq9JCIGoAg-/0/1749846103037?e=1756144800&v=beta&t=GwLHwpUCG5rMmvH4cQevVMGm1Lx28hLLv8XT_AqRo7Q"
            alt="profile"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <p className="text-xl font-semibold text-gray-800">Rishikesh Awasthi</p>
            <p className="text-sm text-gray-600">22 years | Patna, India</p>
            <p className="text-sm text-gray-600">12th September, 2003</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-gray-600">Appointments</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-green-600">₹1250</p>
            <p className="text-sm text-gray-600">Wallet Balance</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-green-600">2</p>
            <p className="text-sm text-gray-600">Saved Posts</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-2xl font-bold text-green-600">8</p>
            <p className="text-sm text-gray-600">Chats</p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="border-b pb-3">
            <p className="text-gray-800 font-medium">Booked appointment with Dr. Sharma</p>
            <p className="text-sm text-gray-500">2 days ago</p>
          </li>
          <li className="border-b pb-3">
            <p className="text-gray-800 font-medium">Added a post to Saved Posts</p>
            <p className="text-sm text-gray-500">5 days ago</p>
          </li>
          <li>
            <p className="text-gray-800 font-medium">Wallet recharged with ₹500</p>
            <p className="text-sm text-gray-500">1 week ago</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

// --- CORRECTED APPOINTMENTS COMPONENT ---
const Appointments = () => {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Mathew Adams",
      specialization: "Ayurveda Specialist",
      date: "20 Aug 2025",
      time: "10:30 AM",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 2,
      doctor: "Dr. Priya Mehra",
      specialization: "Dermatologist",
      date: "21 Aug 2025",
      time: "2:00 PM",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 3,
      doctor: "Dr. Rakesh Sharma",
      specialization: "Bone & Joint Specialist",
      date: "18 Aug 2025",
      time: "11:00 AM",
      status: "Completed",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 4,
      doctor: "Dr. Sneha Kapoor",
      specialization: "Immunity Care",
      date: "25 Aug 2025",
      time: "4:30 PM",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 5,
      doctor: "Dr. Sameer Khan",
      specialization: "Gastroenterologist",
      date: "15 Aug 2025",
      time: "9:00 AM",
      status: "Completed",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 6,
      doctor: "Dr. Alok Gupta",
      specialization: "General Physician",
      date: "28 Aug 2025",
      time: "12:00 PM",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 7,
      doctor: "Dr. Ananya Sen",
      specialization: "Mental Health Specialist",
      date: "30 Aug 2025",
      time: "6:00 PM",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 8,
      doctor: "Dr. Kunal Verma",
      specialization: "Orthopedic Surgeon",
      date: "10 Aug 2025",
      time: "1:30 PM",
      status: "Cancelled",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 9,
      doctor: "Dr. Neha Bansal",
      specialization: "Skin Specialist",
      date: "5 Aug 2025",
      time: "3:00 PM",
      status: "Completed",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
    {
      id: 10,
      doctor: "Dr. Rohit Malhotra",
      specialization: "Cardiologist",
      date: "2 Sep 2025",
      time: "5:30 PM",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    },
  ]);

  // Helper to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "text-green-600 bg-green-100";
      case "Completed":
        return "text-blue-600 bg-blue-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">My Appointments</h1>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
          >
            {/* Doctor Info */}
            <div className="flex items-center space-x-4">
              <img
                src={appt.img}
                alt={appt.doctor}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h2 className="text-lg font-medium">{appt.doctor}</h2>
                <p className="text-sm text-gray-500">{appt.specialization}</p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="text-right">
              <p className="text-sm font-medium">{appt.date}</p>
              <p className="text-sm text-gray-500">{appt.time}</p>
            </div>

            {/* Status */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                appt.status
              )}`}
            >
              {appt.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

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
  )};

function Chats() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Doctor", text: "Hello! How can I help you today?", time: "10:15 AM" },
    { id: 2, sender: "You", text: "I wanted to discuss my recent reports.", time: "10:16 AM" },
    { id: 3, sender: "Doctor", text: "Sure, please upload them here.", time: "10:17 AM" },
    { id: 4, sender: "You", text: "I’ve uploaded them yesterday, did you check?", time: "10:19 AM" },
    { id: 5, sender: "Doctor", text: "Yes, I saw them. Your Vitamin D levels are a bit low.", time: "10:21 AM" },
    { id: 6, sender: "You", text: "Oh, what should I do for that?", time: "10:23 AM" },
    { id: 7, sender: "Doctor", text: "I’ll prescribe supplements. Also try to get some sunlight daily.", time: "10:24 AM" },
    { id: 8, sender: "You", text: "Okay, thank you doctor 🙏", time: "10:25 AM" },
    { id: 9, sender: "Doctor", text: "You’re welcome! Do you have any other concerns?", time: "10:27 AM" },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [showAISupport, setShowAISupport] = useState(false);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const msg = {
      id: messages.length + 1,
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      <div className="p-4 border-b shadow-sm flex items-center">
        <img
          src="https://images.apollo247.in/doctors/d3f554b2-8d1b-4866-a0d6-5ba6d49d0528-1704301132144.png?tr=w-150,c-at_max,f-auto,q=80,dpr-2"
          alt="Doctor"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-lg font-semibold">Dr. Sharma</h2>
          <p className="text-sm text-green-600">Online</p>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-3 ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                msg.sender === "You"
                  ? "bg-green-600 text-white rounded-br-none"
                  : " text-gray-800 border rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-400 block mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 focus:ring-2 focus:ring-pink-500"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-3 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Send
        </button>
      </div>

      {/* AI Support Button */}
      <button
        onClick={() => setShowAISupport(!showAISupport)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600  text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Chat Support
      </button>

      {/* AI Support Panel */}
      {showAISupport && (
        <div className="fixed bottom-20 right-6 w-72 bg-white-500 shadow-xl rounded-lg border p-4">
          <h3 className="font-semibold text-lg  text-gray-800 mb-2">AI Support</h3>
          <p className="text-sm text-gray-600 mb-3">
            Hello! 👋 I’m your AI assistant.  
            You can ask me about appointments, reports, or general health queries.
          </p>
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert("AI Support Coming Soon!")}
          >
            Ask AI
          </button>
        </div>
      )}
    </div>
  )};

// --- Saved Posts Component ---
const SavedPosts = () => {
  const categories = [
//     { name: "All", icon: "/icons/All.svg" },
//     { name: "Hair", icon: "/icons/hair.svg" },
//     { name: "Skin", icon: "/icons/skin.svg" },
//     { name: "Digestion", icon: "/icons/digestion.svg" },
//     { name: "Bones", icon: "/icons/Bones.svg" },
//     { name: "Immunity", icon: "/icons/immunity.svg" },
//     { name: "More", icon: "/icons/more.svg" },
  ];

  const [posts] = useState([
    {
      id: 1,
      author: "Anonymous",
      date: "5 days ago",
      question: "Can Ayurveda help with stress and mental health issues?",
      details:
        "Explores the potential benefits of Ayurvedic practices in managing stress and improving well-being through herbal remedies, meditation, and lifestyle adjustments.",
      replies: [
        {
          id: 101,
          name: "Dr. Mathew Adams",
          date: "5 days ago",
          answer:
            "Yes, Ayurveda emphasizes balance in body and mind. Remedies like Ashwagandha and meditation can reduce stress significantly.",
          likes: 23,
          replyCount: 10,
          saves: 3,
        },
      ],
    },
    {
      id: 2,
      author: "Priya Sharma",
      date: "2 days ago",
      question: "What are some Ayurvedic remedies for improving digestion?",
      details:
        "I have frequent bloating and indigestion. Looking for natural remedies and diet tips.",
      replies: [
        {
          id: 102,
          name: "Dr. Kavita Menon",
          date: "1 day ago",
          answer:
            "Try Triphala powder, ginger tea, and yoga poses like Pavanmuktasana. They help in improving digestion naturally.",
          likes: 15,
          replyCount: 5,
          saves: 2,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-green-500 transition-colors">
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-12 h-12 object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/eee/ccc?text=Icon'; }}
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700 group-hover:text-green-600">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Saved Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className=" rounded-xl p-6 mb-6 border border-gray-200 shadow-sm">
          <div className="mb-4">
            <div className="flex items-center mb-2">
                <img src={`https://i.pravatar.cc/40?u=${post.author}`} alt="author" className="w-8 h-8 rounded-full mr-3" />
                <div>
                    <p className="font-medium text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                </div>
            </div>
            <h2 className="font-semibold text-lg mt-2 text-gray-900">{post.question}</h2>
            <p className="text-gray-600 mt-1">{post.details}</p>
            <button className="text-green-600 text-sm mt-2 font-semibold hover:underline">
              View All {post.replies.length} Replies
            </button>
          </div>

          {post.replies.map((reply) => (
            <div key={reply.id} className="p-4 rounded-lg border border-gray-200  mt-4">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://i.pravatar.cc/40?u=${reply.name}`}
                  alt="reply-user"
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{reply.name}</h3>
                  <p className="text-xs text-gray-400">{reply.date}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700">{reply.answer}</p>

              <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
                <button className="flex items-center space-x-2 group">
                  <HeartIcon /> <span>{reply.likes} Likes</span>
                </button>
                <button className="flex items-center space-x-2 group">
                  <ReplyIcon /> <span>{reply.replyCount} Reply</span>
                </button>
                <button className="flex items-center space-x-2 group">
                  <BookmarkIcon /> <span>{reply.saves} Saves</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};


// --- Main Forum Component ---
export default function Forum() {
  const [activeComponent, setActiveComponent] = useState("Saved Posts");

  const components = {
    "Dashboard": <Dashboard />,
    "Appointments": <Appointments />,
    "My Wallet": <Wallet />,
    "My Chats": <Chats />,
    "Saved Posts": <SavedPosts />,
  };
  
  const navItems = ["Dashboard", "Appointments", "My Wallet", "My Chats", "Saved Posts"];

  return (
    <div className="flex h-screen overflow-hidden  font-sans">
      
      <aside className="w-1/4 max-w-xs  p-6 border-r border-gray-200 flex flex-col">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHsMV4ag851gA/profile-framedphoto-shrink_400_400/B56Zdq9JCIGoAg-/0/1749846103037?e=1756144800&v=beta&t=GwLHwpUCG5rMmvH4cQevVMGm1Lx28hLLv8XT_AqRo7Q"
            alt="profile"
            className="rounded-full w-24 h-24 mb-3 border-4 border-gray-100"
          />
          <h2 className="font-semibold text-xl text-gray-800">Rishikesh Awasthi</h2>
          <p className="text-sm text-gray-500">12th September, 2003, 22 years</p>
          <p className="text-sm text-gray-500 mb-5">Patna, India</p>
        </div>
        <nav className="space-y-2 mt-8">
            {navItems.map(item => (
                 <button
                    key={item}
                    onClick={() => setActiveComponent(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeComponent === item
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                >
                    {item}
                </button>
            ))}
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {components[activeComponent]}
      </main>
    </div>
  );
}