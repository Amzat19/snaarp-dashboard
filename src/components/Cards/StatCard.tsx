import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import type { StatCardProps } from "../../types";

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  chart,
  icon: Icon,
}) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-2 text-gray-500">
        {Icon && <Icon size={16} />}
        <span className="text-sm font-medium">{title}</span>
      </div>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <div
          className={`flex items-center gap-1 mt-1 text-xs ${changeType === "up" ? "text-green-600" : "text-red-600"}`}
        >
          {changeType === "up" ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          <span>{change}</span>
          <span className="text-gray-400 ml-1">Compared to last week</span>
        </div>
      </div>
      {chart && (
        <div className="w-24 h-12">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <defs>
                <linearGradient
                  id={`color${title.replace(/\s+/g, "")}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={changeType === "up" ? "#22c55e" : "#ef4444"}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={changeType === "up" ? "#22c55e" : "#ef4444"}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={changeType === "up" ? "#22c55e" : "#ef4444"}
                fillOpacity={1}
                fill={`url(#color${title.replace(/\s+/g, "")})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  </div>
);
