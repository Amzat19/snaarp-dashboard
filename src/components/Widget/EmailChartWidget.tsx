import React from "react";
import { EmailPieChart } from "../Charts/EmailPieChart";
import { EmailAreaChart } from "../Charts/EmailAreaChart";

export const EmailChartWidget: React.FC = () => (
  <div className="grid grid-cols-2 gap-6">
    <EmailPieChart />
    <EmailAreaChart />
  </div>
);
