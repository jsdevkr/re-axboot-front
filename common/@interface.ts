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
