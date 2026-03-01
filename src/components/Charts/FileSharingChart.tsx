import React from "react";
import { Upload, BarChart3, ChevronDown } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { fileSharingData } from "../../data/mockData";

export const FileSharingChart: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Upload size={18} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900">File Sharing</h3>
        </div>
        <p className="text-xs text-gray-500">
          Keep track of files and how they're shared
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <BarChart3 size={16} className="text-blue-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <BarChart3 size={16} className="text-gray-400" />
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
          Month
          <ChevronDown size={14} />
        </button>
      </div>
    </div>
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={fileSharingData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f3f4f6"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            cursor={{ fill: "#f3f4f6" }}
          />
          <Bar
            dataKey="public"
            stackId="a"
            fill="#3b82f6"
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="link"
            stackId="a"
            fill="#60a5fa"
            radius={[0, 0, 0, 0]}
          />
          <Bar dataKey="org" stackId="a" fill="#93c5fd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="flex items-center justify-center gap-6 mt-4 text-xs">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
        <span className="text-gray-600">Public</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
        <span className="text-gray-600">Anyone with link</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
        <span className="text-gray-600">Within Organisation</span>
      </div>
    </div>
  </div>
);
