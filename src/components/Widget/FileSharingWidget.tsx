import React from "react";
import { FileSharingChart } from "../Charts/FileSharingChart";
import { ActiveUsersPanel } from "./ActiveUsersPanel";

export const FileSharingWidget: React.FC = () => (
  <div className="grid grid-cols-2 gap-6">
    <FileSharingChart />
    <ActiveUsersPanel />
  </div>
);
