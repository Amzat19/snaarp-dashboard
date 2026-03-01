import React from "react";
import { HardDrive, Zap } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { storageData } from "../../data/mockData";

export const StorageChart: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <HardDrive size={18} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900">Storage</h3>
      </div>
    </div>
    <div className="flex items-center gap-8">
      <div className="relative w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={storageData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
            >
              {storageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">80%</p>
            <p className="text-xs text-gray-500">Used</p>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-2">
            <div className="w-1 h-full bg-yellow-400 rounded-full"></div>
            <div>
              <p className="text-xs font-semibold text-yellow-800">Note</p>
              <p className="text-xs text-yellow-700 mt-1">
                You've almost reached your limit. You have used 80% of your
                available storage.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {storageData.slice(0, 4).map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Zap size={16} />
          Upgrade Plan
        </button>
      </div>
    </div>
  </div>
);
