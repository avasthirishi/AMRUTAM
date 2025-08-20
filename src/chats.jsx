import { useState } from "react";

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
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border rounded-lg p-4 shadow flex items-center mb-4">
        <img
          src="https://images.apollo247.in/doctors/d3f554b2-8d1b-4866-a0d6-5ba6d49d0528-1704301132144.png?tr=w-150,c-at_max,f-auto,q=80,dpr-2"
          alt="Doctor"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h2 className="text-lg font-semibold">Dr. Sharma</h2>
          <p className="text-sm text-green-600">Online</p>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto space-y-3 p-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                msg.sender === "You"
                  ? "bg-green-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 border rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-400 block mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="mt-4 bg-white border rounded-full shadow p-2 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-4 py-2 rounded-full focus:outline-none"
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
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Chat Support
      </button>

      {/* AI Support Panel */}
      {showAISupport && (
        <div className="fixed bottom-20 right-6 w-72 bg-white shadow-xl rounded-lg border p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">AI Support</h3>
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
  );
}

export default Chats;
