import React from "react";
import type { Widget, WidgetType } from "../../types";
import { CloudNetworkWidget } from "../Widget/CloudNetworkWidget";
import { FileSharingWidget } from "../Widget/FileSharingWidget";
import { DeviceManagementWidget } from "../Widget/DeviceManagementWidget";
import { ProductivityWidget } from "../Widget/ProductivityWidget";
import { EmailChartWidget } from "../Widget/EmailChartWidget";
import { OnlineUsersWidget } from "../Widget/OnlineUsersWidget";
import { AppActivityWidget } from "../Widget/AppActivityWidget";

const widgetMap: Record<WidgetType, React.FC> = {
  "cloud-network": CloudNetworkWidget,
  "file-sharing": FileSharingWidget,
  "device-mgmt": DeviceManagementWidget,
  productivity: ProductivityWidget,
  "email-chart": EmailChartWidget,
  "online-users": OnlineUsersWidget,
  "app-activity": AppActivityWidget,
};

interface Props {
  widget: Widget;
}

export const WidgetRenderer: React.FC<Props> = ({ widget }) => {
  const Component = widgetMap[widget.type];
  return <Component />;
};
