import React from "react";
import { Mail } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { emailPieData } from "../../data/mockData";

export const EmailPieChart: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center gap-2 mb-6">
      <Mail size={18} className="text-gray-500" />
      <h3 className="font-semibold text-gray-900">Email Chart</h3>
    </div>
    <div className="flex items-center gap-8">
      <div className="relative w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={emailPieData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              {emailPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Mail size={16} className="mx-auto text-gray-400 mb-1" />
            <p className="text-xs text-gray-500">
              Emails
              <br />
              Chart
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        {emailPieData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-6 text-center">
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        Total Emails Sent
      </p>
      <p className="text-2xl font-bold text-gray-900">5,421</p>
    </div>
  </div>
);
