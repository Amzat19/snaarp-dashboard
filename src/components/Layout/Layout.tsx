import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <Sidebar activeTab="dashboard" setActiveTab={() => {}} />
    <div className="ml-64">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  </div>
);
