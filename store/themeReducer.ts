import { ThemeReducer, IThemeAction, ThemeType } from "../common/@interface";
import { defaultColors, darkColors } from "styles/colors";

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
