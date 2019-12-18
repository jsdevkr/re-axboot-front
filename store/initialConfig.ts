import React, { createContext } from "react";
import { IConfig, IConfigAction } from "../common/@interface";

export const initialConfig: IConfig = {
  width: 500,
  height: 500
};
export const ConfigContext = createContext(initialConfig);
export const DispatchConfigContext = createContext<(p: IConfigAction) => void>(
  p => {}
);
