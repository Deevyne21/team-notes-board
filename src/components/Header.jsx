import { MessageSquare, Users } from "lucide-react";

export default function Header({ noteCount }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
            <MessageSquare className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Team Notes Board
            </h1>
            <p className="text-gray-500 text-sm">
              Share quick updates with the team
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
          <Users size={20} className="text-blue-600" />
          <span className="text-blue-600 font-semibold">{noteCount} notes</span>
        </div>
      </div>
    </div>
  );
}
