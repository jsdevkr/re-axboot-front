import { Colors } from "styles/colors";
import defaultConfig from "store/defaultConfig";

export type IConfig = typeof defaultConfig;

export interface IConfigAction {
  type: ConfigActionType;
  value?: any;
}

export enum ConfigActionType {
  SET_WIDTH = "width",
  SET_HEIGHT = "height",
  SET_SIDER_COLLAPSED = "siderCollapsed"
}

export type ConfigReducer = (state: IConfig, action: IConfigAction) => void;

export interface ITheme {
  colors: Colors;
}

export interface IThemeAction {
  type: ThemeType;
}

export enum ThemeType {
  default = "default",
  dark = "dark",
  light = "light"
}

export type ThemeReducer = (state: ITheme, action: IThemeAction) => ITheme;

export interface IMenuItem {
  label?: string;
  sublabel?: string;
  type?: "normal" | "separator";
  icon?: string | React.ReactElement<any>;
  submenu?: IMenuItem[];
  url?: string;
}
