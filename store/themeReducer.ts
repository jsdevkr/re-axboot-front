import { ThemeReducer, IThemeAction, ThemeType } from "../common/@interface";
import { defaultColors, darkColors } from "styles/colors";
import * as appDark from "styles/less/app-dark.less";
import * as appLight from "styles/less/app-light.less";

export const themeReducer: ThemeReducer = (state, action) => {
  const { type } = action;
  let appStyle = document.getElementById("appStyle");
  if (!appStyle) {
    appStyle = document.createElement("style");
    appStyle.id = "appStyle";
    document.head.appendChild(appStyle);
  }
  console.log(JSON.stringify(appDark));

  switch (type) {
    case ThemeType.default:
      appStyle.innerHTML = appDark.toString();
      state.colors = defaultColors;
      return state;
    case ThemeType.light:
      appStyle.innerHTML = appLight.toString();
      state.colors = defaultColors;
      return state;
    case ThemeType.dark:
      appStyle.innerHTML = appDark.toString();
      state.colors = darkColors;
      return state;
    default:
      throw new Error();
  }
};
