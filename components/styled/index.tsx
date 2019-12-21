import { Colors } from "styles/colors";
import * as styledComponents from "styled-components";

const {
  default: styled,
  ThemeProvider,
  withTheme,
  keyframes,
  ThemeContext
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Colors>;

export { styled, ThemeProvider, withTheme, keyframes, ThemeContext };
