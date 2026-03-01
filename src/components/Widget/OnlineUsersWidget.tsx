import React from "react";
import { Users, ChevronDown, Monitor } from "lucide-react";
import { onlineUsers } from "../../data/mockData";
import { ActivityIcon } from "../Common/ActivityIcon";

export const OnlineUsersWidget: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Users size={18} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900">Online Users</h3>
        </div>
        <p className="text-xs text-gray-500">
          View your comprehensive online users
        </p>
      </div>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg">
        All Organization
        <ChevronDown size={14} />
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Name
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Location
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Organization
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Device
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Current Activity
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Time Usage
            </th>
          </tr>
        </thead>
        <tbody>
          {onlineUsers.map((user, idx) => (
            <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${user.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
                  ></div>
                  <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {user.name}
                  </span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                {user.location}
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">{user.org}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Monitor size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{user.device}</span>
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <ActivityIcon activity={user.activity} />
                  <span className="text-sm text-gray-600">{user.activity}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">{user.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
