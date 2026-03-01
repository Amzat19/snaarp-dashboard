import React from "react";
import { Users, ChevronDown } from "lucide-react";
import { countryData } from "../../data/mockData";

export const ActiveUsersPanel: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Users size={18} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900">Active Users</h3>
      </div>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
        Month
        <ChevronDown size={14} />
      </button>
    </div>
    <div className="flex gap-4">
      <div className="flex-1 bg-gray-100 rounded-lg h-48 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto">
              <Users size={20} />
            </div>
            <p className="text-xs text-gray-500">Map View</p>
          </div>
        </div>
      </div>
      <div className="w-48 space-y-3">
        {countryData.map((country) => (
          <div key={country.name} className="flex items-center gap-3">
            <span className="text-lg">{country.flag}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-700">
                  {country.name}
                </span>
                <span className="text-xs text-gray-500">
                  {country.percent}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${country.color} rounded-full`}
                  style={{ width: `${country.percent}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
