import React from "react";
import { Globe, ChevronDown, Users, Upload, Building2 } from "lucide-react";
import { StorageChart } from "../Charts/StorageChart";
import { StatCard } from "../Cards/StatCard";

export const CloudNetworkWidget: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Globe size={20} className="text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-900">Cloud Network</h2>
      </div>
      <ChevronDown size={20} className="text-gray-400" />
    </div>
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <StatCard
          title="Users"
          value="3,836"
          change="15%"
          changeType="down"
          icon={Users}
          chart={[
            { value: 40 },
            { value: 35 },
            { value: 45 },
            { value: 40 },
            { value: 38 },
          ]}
        />
        <StatCard
          title="Groups"
          value="316"
          change="23%"
          changeType="up"
          icon={Users}
          chart={[
            { value: 30 },
            { value: 40 },
            { value: 50 },
            { value: 55 },
            { value: 60 },
          ]}
        />
        <StatCard
          title="Uploads"
          value="316"
          change="23%"
          changeType="up"
          icon={Upload}
          chart={[
            { value: 25 },
            { value: 35 },
            { value: 45 },
            { value: 55 },
            { value: 65 },
          ]}
        />
        <StatCard
          title="Departments"
          value="316"
          change="23%"
          changeType="down"
          icon={Building2}
          chart={[
            { value: 60 },
            { value: 50 },
            { value: 45 },
            { value: 40 },
            { value: 35 },
          ]}
        />
      </div>
      <StorageChart />
    </div>
  </div>
);
