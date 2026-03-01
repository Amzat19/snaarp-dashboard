import React from "react";
import {
  BarChart3,
  Zap,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { productivityStats } from "../../data/mockData";
import { MiniAreaChart } from "../Charts/MiniAreaChart";

export const ProductivityWidget: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <BarChart3 size={18} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900">Productivity Report</h3>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
        <Zap size={16} />
        Upgrade Plan
        <ChevronDown size={16} />
      </button>
    </div>

    <div className="grid grid-cols-4 gap-4">
      {productivityStats.map((stat) => (
        <div key={stat.label} className="p-4 border border-gray-100 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <stat.icon size={14} />
            <span className="text-xs">{stat.label}</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              <div
                className={`flex items-center gap-1 text-xs ${stat.up ? "text-green-600" : "text-red-600"}`}
              >
                {stat.up ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <ArrowDownRight size={12} />
                )}
                {stat.change}
              </div>
            </div>
            <MiniAreaChart up={stat.up} />
          </div>
          <p className="text-xs text-gray-400 mt-2">Compared to last week</p>
        </div>
      ))}
    </div>
  </div>
);
