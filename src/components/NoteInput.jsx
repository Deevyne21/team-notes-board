import { useState } from "react";
import { Send } from "lucide-react";

export default function NoteInput({ onAddNote, loading }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!username.trim() || !message.trim()) {
      alert("Please enter both username and message");
      return;
    }

    const success = await onAddNote(username, message);

    if (success) {
      setUsername("");
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Add a Note</h2>
      <div className="space-y-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What's on your mind?"
          rows="3"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition resize-none"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-[1.02] transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send size={20} />
          {loading ? "Posting..." : "Post Note"}
        </button>
      </div>
    </div>
  );
}
