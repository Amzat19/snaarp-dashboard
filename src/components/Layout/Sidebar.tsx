import React from "react";
import {
  LayoutDashboard,
  Building2,
  FileText,
  CreditCard,
  User,
  HardDrive,
  Settings,
  Monitor,
  BarChart3,
  Users,
  HelpCircle,
} from "lucide-react";
import type { MenuItem, SidebarProps } from "../../types";

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const menuItems: MenuItem[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "organization", label: "Organization & Reg.", icon: Building2 },
    { id: "reporting", label: "Reporting", icon: FileText },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "account", label: "Account", icon: User },
    { id: "storage", label: "Storage", icon: HardDrive },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "device", label: "Device Management", icon: Monitor },
    { id: "productivity", label: "Productivity Report", icon: BarChart3 },
    { id: "userpanel", label: "User Panel", icon: Users },
    { id: "support", label: "Support", icon: HelpCircle },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Snaarp</h1>
      </div>
      <nav className="px-4 pb-20">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1 ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
            CS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Chidima Snaarp
            </p>
            <p className="text-xs text-gray-500 truncate">chidima@snaarp.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
