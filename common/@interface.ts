import { Colors } from "styles/colors";

export interface IConfig {
  width?: number;
  height?: number;
}

export interface IConfigAction {
  type: ConfigActionType;
  value?: any;
}

export enum ConfigActionType {
  SET_WIDTH = "width",
  SET_HEIGHT = "height"
}

export type ConfigReducer = (state: IConfig, action: IConfigAction) => IConfig;

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
