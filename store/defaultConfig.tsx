import react from "react";
import { Icon } from "antd";
import { IMenuItem } from "common/@interface";

const defaultConfig = {
  siderMenu: [
    { label: "PIE", icon: <Icon type="pie-chart" />, url: "" },
    { label: "DESKTOP", icon: <Icon type="desktop" />, url: "" },
    {
      label: "PARENT",
      icon: <Icon type="team" />,
      url: "",
      submenu: [
        { label: "CHILD 1", url: "" },
        { label: "CHILD 2", url: "" }
      ]
    }
  ] as IMenuItem[],
  mainMenu: [] as IMenuItem[],
  siderWidth: 220,
  siderCollapsedWidth: 50,
  siderCollapsed: true,
  width: 500,
  height: 500
};

export default defaultConfig;
