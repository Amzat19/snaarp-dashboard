import React from "react";
import {
  Monitor,
  Zap,
  ChevronDown,
  Power,
  CheckCircle2,
  XCircle,
  Mail,
  Download,
  Building2,
} from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { deviceStats } from "../../data/mockData";
import { MiniAreaChart } from "../Charts/MiniAreaChart";

export const DeviceManagementWidget: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Monitor size={18} className="text-gray-500" />
        <h3 className="font-semibold text-gray-900">
          Device Management Dashboard
        </h3>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
        <Zap size={16} />
        Upgrade Plan
        <ChevronDown size={16} />
      </button>
    </div>

    <div className="grid grid-cols-4 gap-4 mb-6">
      {deviceStats.map((stat) => (
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
        </div>
      ))}
    </div>

    <div className="grid grid-cols-4 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Zap size={16} className="mx-auto mb-1 text-gray-400" />
          <p className="text-lg font-bold text-gray-900">1,923</p>
          <p className="text-xs text-gray-500">Plugged</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Power size={16} className="mx-auto mb-1 text-gray-400" />
          <p className="text-lg font-bold text-gray-900">1,913</p>
          <p className="text-xs text-gray-500">Unplugged</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <CheckCircle2 size={16} className="mx-auto mb-1 text-green-500" />
          <p className="text-lg font-bold text-gray-900">592</p>
          <p className="text-xs text-gray-500">Active</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <XCircle size={16} className="mx-auto mb-1 text-gray-400" />
          <p className="text-lg font-bold text-gray-900">3,836</p>
          <p className="text-xs text-gray-500">Offline</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Mail size={16} className="mx-auto mb-1 text-blue-500" />
          <p className="text-lg font-bold text-gray-900">592</p>
          <p className="text-xs text-gray-500">Sent</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Download size={16} className="mx-auto mb-1 text-gray-400" />
          <p className="text-lg font-bold text-gray-900">3,836</p>
          <p className="text-xs text-gray-500">Received</p>
        </div>
      </div>
      <div className="p-3 bg-gray-50 rounded-lg">
        <p className="text-lg font-bold text-gray-900 mb-1">316</p>
        <div className="flex items-center gap-1 text-green-600 text-xs mb-2">
          <ArrowUpRight size={12} />
          23%
        </div>
        <p className="text-xs text-gray-500">Number of Downloads</p>
        <p className="text-xs text-gray-400 mt-1">Compared to last week</p>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4 mt-4 text-xs">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600">
            <Monitor size={14} />
          </div>
          <div>
            <p className="font-medium text-gray-900">Windows</p>
            <p className="text-gray-500">1,403 devices</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
          </div>
          <div>
            <p className="font-medium text-gray-900">Mac</p>
            <p className="text-gray-500">632 devices</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Building2 size={14} className="text-gray-400" />
          <span className="text-gray-600">Organizations: 1,403 users</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-green-500" />
          <span className="text-gray-600">Read: 1,403 emails</span>
        </div>
      </div>
      <div className="text-right text-gray-500">Compared to last week</div>
    </div>
  </div>
);
