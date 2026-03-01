import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

interface Props {
  up: boolean;
}

export const MiniAreaChart: React.FC<Props> = ({ up }) => (
  <div className="w-16 h-8">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={[{ v: 30 }, { v: 50 }, { v: 40 }, { v: 60 }, { v: 45 }]}>
        <Area
          type="monotone"
          dataKey="v"
          stroke={up ? "#22c55e" : "#ef4444"}
          fill={up ? "#22c55e" : "#ef4444"}
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
