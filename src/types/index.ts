import type { ElementType } from "react";

export interface MenuItem {
  id: string;
  label: string;
  icon: ElementType;
}

export interface StatData {
  value: number;
}

export interface StorageItem {
  name: string;
  value: number;
  color: string;
}

export interface FileSharingData {
  month: string;
  public: number;
  link: number;
  org: number;
}

export interface CountryData {
  name: string;
  flag: string;
  percent: number;
  color: string;
}

export interface DeviceStat {
  label: string;
  value: string;
  change: string;
  up: boolean;
  icon: ElementType;
}

export interface ProductivityStat {
  label: string;
  value: string;
  change: string;
  up: boolean;
  icon: ElementType;
}

export interface EmailPieData {
  name: string;
  value: number;
  color: string;
}

export interface EmailLineData {
  month: string;
  value: number;
}

export interface OnlineUser {
  name: string;
  location: string;
  org: string;
  device: string;
  activity: string;
  time: string;
  status: "online" | "offline";
}

export interface AppActivity {
  name: string;
  users: number;
  hours: string;
  date: string;
  icon: string;
  color: string;
}

export interface WebActivityItem {
  name: string;
  percent: number;
  time: string;
  color: string;
  icon: string;
}

export type WidgetType =
  | "cloud-network"
  | "file-sharing"
  | "device-mgmt"
  | "productivity"
  | "email-chart"
  | "online-users"
  | "app-activity";

export interface Widget {
  id: string;
  type: WidgetType;
}

export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  chart?: StatData[];
  icon?: ElementType;
}

export interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export interface DraggableWidgetProps {
  id: string;
  index: number;
  children: React.ReactNode;
}
