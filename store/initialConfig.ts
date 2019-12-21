import React, { createContext } from "react";
import { IConfigAction, IThemeAction } from "../common/@interface";
import defaultConfig from "./defaultConfig";

export const ConfigContext = createContext(defaultConfig);
export const DispatchConfigContext = createContext<(p: IConfigAction) => void>(
  p => {}
);
export const DispatchThemeContext = createContext<(p: IThemeAction) => void>(
  p => {}
);
