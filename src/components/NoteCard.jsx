export default function NoteCard({ note }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition group">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
            {note.user.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{note.user}</h3>
            <span className="text-sm text-gray-500">{note.time}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mt-2">{note.message}</p>
    </div>
  );
}
