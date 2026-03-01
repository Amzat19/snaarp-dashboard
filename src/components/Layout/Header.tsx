import React from "react";
import { Search, Bell } from "lucide-react";

export const Header: React.FC = () => (
  <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
    <div className="flex-1 max-w-2xl">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search for users, groups or settings"
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm font-medium text-gray-700">Agent ID:</span>
        <code className="text-xs bg-gray-200 px-2 py-1 rounded">
          0365e237742y3b38
        </code>
      </div>
    </div>
  </header>
);
