import React from "react";
import { Globe, ChevronDown } from "lucide-react";
import { webActivities } from "../../data/mockData";

export const WebActivityPanel: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Globe size={18} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900">Web Activity</h3>
      </div>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg">
        Month
        <ChevronDown size={14} />
      </button>
    </div>
    <p className="text-xs text-gray-500 mb-4">
      View your comprehensive organizational web report
    </p>

    <div className="space-y-4">
      {webActivities.map((activity) => (
        <div key={activity.name} className="flex items-center gap-4">
          <div
            className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
          >
            {activity.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {activity.name}
              </span>
              <span className="text-sm text-gray-600">{activity.time}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${activity.color} rounded-full`}
                style={{ width: `${activity.percent}%` }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-900 w-8">
            {activity.percent}%
          </span>
        </div>
      ))}
    </div>
  </div>
);
