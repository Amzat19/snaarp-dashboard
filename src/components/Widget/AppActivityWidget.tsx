import React from "react";
import { Smartphone, ChevronDown } from "lucide-react";
import { appActivities } from "../../data/mockData";
import { WebActivityPanel } from "./WebActivityPanel";

export const AppActivityWidget: React.FC = () => (
  <div className="grid grid-cols-3 gap-6">
    <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Smartphone size={18} className="text-gray-500" />
            <h3 className="font-semibold text-gray-900">App Activity Report</h3>
          </div>
          <p className="text-xs text-gray-500">
            View your comprehensive organizational app report
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg">
            All Organization
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg">
            Month
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Application
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Total Users
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Total Number of Hours
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {appActivities.map((app, idx) => (
            <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 ${app.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {app.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {app.name}
                  </span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">{app.users}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{app.hours}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{app.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <WebActivityPanel />
  </div>
);
