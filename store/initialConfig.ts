import React, { createContext } from "react";
import { IConfig, IConfigAction, IThemeAction } from "../common/@interface";

export const initialConfig: IConfig = {
  width: 500,
  height: 500
};
export const ConfigContext = createContext(initialConfig);
export const DispatchConfigContext = createContext<(p: IConfigAction) => void>(
  p => {}
);
export const DispatchThemeContext = createContext<(p: IThemeAction) => void>(
  p => {}
);
