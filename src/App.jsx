import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import NoteInput from "./components/NoteInput";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // API URL for json-server
  const API_URL = "http://localhost:3001/notes";

  // Fetch notes when component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // GET request - Fetch all notes from json-server
  const fetchNotes = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }

      const data = await response.json();

      // Sort by ID descending (newest first)
      const sortedNotes = data.sort((a, b) => b.id - a.id);
      setNotes(sortedNotes);
    } catch (error) {
      console.error("Error fetching notes:", error);
      alert(
        "Could not load notes. Make sure json-server is running on port 3001"
      );
    } finally {
      setLoading(false);
    }
  };

  // POST request - Add new note to json-server
  const addNote = async (username, message) => {
    try {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newNote = {
        user: username.trim(),
        message: message.trim(),
        time: time,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const savedNote = await response.json();

      // Add new note to the top of the list
      setNotes([savedNote, ...notes]);

      return true; // Success
    } catch (error) {
      console.error("Error adding note:", error);
      alert(
        "Could not add note. Make sure json-server is running on port 3001"
      );
      return false; // Failed
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header noteCount={notes.length} />
        <NoteInput onAddNote={addNote} loading={loading} />

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading notes...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Recent Updates
            </h2>
            {notes.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-400 text-lg">
                  No notes yet. Be the first to share!
                </p>
              </div>
            ) : (
              notes.map((note) => <NoteCard key={note.id} note={note} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
}
