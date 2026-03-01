import React from "react";
import { Globe } from "lucide-react";

interface Props {
  activity: string;
}

export const ActivityIcon: React.FC<Props> = ({ activity }) => {
  if (activity.includes("Chrome"))
    return (
      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
        C
      </div>
    );
  if (activity.includes("Instagram"))
    return (
      <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">
        I
      </div>
    );
  if (activity.includes("Teams"))
    return (
      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
        T
      </div>
    );
  if (activity.includes("YouTube"))
    return (
      <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-xs">
        Y
      </div>
    );
  if (activity.includes("Opera"))
    return (
      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
        O
      </div>
    );
  if (activity.includes("WhatsApp"))
    return (
      <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
        W
      </div>
    );
  return <Globe size={14} className="text-gray-400" />;
};
