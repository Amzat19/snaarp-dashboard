import {
  Monitor,
  User,
  Mail,
  Smartphone,
  Clock,
  Users,
  Globe,
  Calendar,
} from "lucide-react";
import type {
  FileSharingData,
  StorageItem,
  CountryData,
  DeviceStat,
  ProductivityStat,
  EmailLineData,
  EmailPieData,
  OnlineUser,
  AppActivity,
  WebActivityItem,
  Widget,
} from "../types";

export const fileSharingData: FileSharingData[] = [
  { month: "JAN", public: 40, link: 30, org: 20 },
  { month: "FEB", public: 60, link: 45, org: 30 },
  { month: "MAR", public: 45, link: 35, org: 25 },
  { month: "APR", public: 50, link: 40, org: 30 },
  { month: "MAY", public: 70, link: 55, org: 40 },
  { month: "JUN", public: 65, link: 50, org: 35 },
  { month: "JUL", public: 80, link: 60, org: 45 },
  { month: "AUG", public: 55, link: 45, org: 35 },
  { month: "SEP", public: 50, link: 40, org: 30 },
  { month: "OCT", public: 60, link: 50, org: 40 },
  { month: "NOV", public: 75, link: 60, org: 45 },
  { month: "DEC", public: 55, link: 45, org: 35 },
];

export const storageData: StorageItem[] = [
  { name: "Files", value: 30, color: "#8b5cf6" },
  { name: "Folders", value: 25, color: "#f59e0b" },
  { name: "Videos", value: 20, color: "#10b981" },
  { name: "Apps", value: 15, color: "#3b82f6" },
  { name: "Audios", value: 7, color: "#ef4444" },
  { name: "Miscellaneous", value: 3, color: "#6b7280" },
];

export const countryData: CountryData[] = [
  { name: "United Kingdom", flag: "🇬🇧", percent: 78, color: "bg-green-500" },
  { name: "Nigeria", flag: "🇳🇬", percent: 61, color: "bg-green-500" },
  { name: "UAE", flag: "🇦🇪", percent: 45, color: "bg-yellow-500" },
  { name: "Canada", flag: "🇨🇦", percent: 59, color: "bg-green-500" },
  {
    name: "United States of America",
    flag: "🇺🇸",
    percent: 78,
    color: "bg-green-500",
  },
];

export const deviceStats: DeviceStat[] = [
  {
    label: "Number Of Devices",
    value: "3,836",
    change: "15%",
    up: true,
    icon: Monitor,
  },
  { label: "Users", value: "3,836", change: "15%", up: false, icon: User },
  { label: "Emails", value: "316", change: "23%", up: false, icon: Mail },
  {
    label: "Number of Apps",
    value: "316",
    change: "23%",
    up: false,
    icon: Smartphone,
  },
];

export const productivityStats: ProductivityStat[] = [
  {
    label: "Hours Productivity",
    value: "576 Hrs",
    change: "15%",
    up: false,
    icon: Clock,
  },
  {
    label: "Days Activity",
    value: "267 Days",
    change: "15%",
    up: true,
    icon: Calendar,
  },
  { label: "Users", value: "3,836", change: "15%", up: false, icon: Users },
  {
    label: "Web Activity",
    value: "178 Activities",
    change: "15%",
    up: true,
    icon: Globe,
  },
];

export const emailPieData: EmailPieData[] = [
  { name: "Sent", value: 45, color: "#f59e0b" },
  { name: "Received", value: 40, color: "#3b82f6" },
  { name: "Unsent", value: 15, color: "#e5e7eb" },
];

export const emailLineData: EmailLineData[] = [
  { month: "JAN", value: 1000 },
  { month: "FEB", value: 1500 },
  { month: "MARCH", value: 1200 },
  { month: "APR", value: 2000 },
  { month: "MAY", value: 2800 },
  { month: "JUN", value: 3500 },
  { month: "JUL", value: 4200 },
  { month: "AUG", value: 4800 },
  { month: "SEP", value: 5500 },
  { month: "OCT", value: 6200 },
  { month: "NOV", value: 6800 },
  { month: "DEC", value: 7200 },
];

export const onlineUsers: OnlineUser[] = [
  {
    name: "Annette Black",
    location: "Ottawa, Canada",
    org: "MSBM, Ottawa",
    device: "Windows",
    activity: "Google Chrome",
    time: "3 hours 12 minutes",
    status: "online",
  },
  {
    name: "Floyd Miles",
    location: "Lagos, Nigeria",
    org: "MSBM, Lagos",
    device: "Windows",
    activity: "Instagram",
    time: "2 hours 8 minutes",
    status: "online",
  },
  {
    name: "Ronald Richards",
    location: "Dubai, UAE",
    org: "MSBM, Dubai",
    device: "Mac",
    activity: "Microsoft Teams",
    time: "6 hours 45 minutes",
    status: "offline",
  },
  {
    name: "Guy Hawkins",
    location: "London, UK",
    org: "MSBM, London",
    device: "Windows",
    activity: "Instagram",
    time: "1 hour 30 minutes",
    status: "online",
  },
  {
    name: "Jane Cooper",
    location: "Frankfurt, Germany",
    org: "MSBM, Frankfurt",
    device: "Mac",
    activity: "Google Chrome",
    time: "9 hours 10 minutes",
    status: "online",
  },
  {
    name: "Leslie Alexander",
    location: "Rome, Italy",
    org: "MSBM, Rome",
    device: "Windows",
    activity: "YouTube",
    time: "45 minutes",
    status: "offline",
  },
  {
    name: "Annette Black",
    location: "Calgary, Canada",
    org: "MSBM, Calgary",
    device: "Linux",
    activity: "Opera Mini",
    time: "45 minutes",
    status: "offline",
  },
  {
    name: "Floyd Miles",
    location: "Mumbai, India",
    org: "MSBM, Mumbai",
    device: "Mac",
    activity: "WhatsApp",
    time: "45 minutes",
    status: "online",
  },
];

export const appActivities: AppActivity[] = [
  {
    name: "Google Chrome",
    users: 34,
    hours: "3 hours 12 minutes",
    date: "2024-06-26 15:33:49",
    icon: "C",
    color: "bg-green-500",
  },
  {
    name: "YouTube",
    users: 12,
    hours: "2 hours 8 minutes",
    date: "2024-06-26 12:45:41",
    icon: "Y",
    color: "bg-red-600",
  },
  {
    name: "Microsoft Teams",
    users: 16,
    hours: "6 hours 45 minutes",
    date: "2024-06-21 16:28:21",
    icon: "T",
    color: "bg-blue-600",
  },
  {
    name: "WhatsApp",
    users: 49,
    hours: "1 hour 30 minutes",
    date: "2024-06-26 15:33:49",
    icon: "W",
    color: "bg-green-600",
  },
  {
    name: "Opera Mini",
    users: 3,
    hours: "9 hours 10 minutes",
    date: "2024-06-21 16:28:21",
    icon: "O",
    color: "bg-red-500",
  },
  {
    name: "Instagram",
    users: 22,
    hours: "45 minutes",
    date: "2024-06-26 12:45:41",
    icon: "I",
    color: "bg-pink-500",
  },
];

export const webActivities: WebActivityItem[] = [
  {
    name: "Chrome",
    percent: 78,
    time: "5 hours 12 minutes",
    color: "bg-green-500",
    icon: "C",
  },
  {
    name: "Gmail",
    percent: 61,
    time: "2 hours 24 minutes",
    color: "bg-red-500",
    icon: "G",
  },
  {
    name: "Firefox",
    percent: 45,
    time: "40 minutes",
    color: "bg-orange-500",
    icon: "F",
  },
  {
    name: "Instagram",
    percent: 78,
    time: "5 hours 6 minutes",
    color: "bg-pink-500",
    icon: "I",
  },
  {
    name: "x.com",
    percent: 59,
    time: "1 hours 8 minutes",
    color: "bg-gray-800",
    icon: "X",
  },
  {
    name: "Facebook",
    percent: 61,
    time: "3 hours 1 minute",
    color: "bg-blue-600",
    icon: "F",
  },
];

export const defaultWidgets: Widget[] = [
  { id: "cloud-network", type: "cloud-network" },
  { id: "file-sharing", type: "file-sharing" },
  { id: "device-mgmt", type: "device-mgmt" },
  { id: "productivity", type: "productivity" },
  { id: "email-chart", type: "email-chart" },
  { id: "online-users", type: "online-users" },
  { id: "app-activity", type: "app-activity" },
];
