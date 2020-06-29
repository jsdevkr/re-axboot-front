import { ThemeReducer, IThemeAction, ThemeType } from "../common/@interface";
import { defaultColors, darkColors } from "styles/colors";
import * as appDark from "styles/less/app-dark.less";
import * as appLight from "styles/less/app-light.less";

export const themeReducer: ThemeReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case ThemeType.default:
      state.colors = defaultColors;
      return state;
    case ThemeType.light:
      state.colors = defaultColors;
      return state;
    case ThemeType.dark:
      state.colors = darkColors;
      return state;
    default:
      throw new Error();
  }
};
