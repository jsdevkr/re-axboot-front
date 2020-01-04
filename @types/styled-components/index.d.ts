import { defaultColors } from "styles/colors";
import "styled-components";

type Theme = typeof defaultColors;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
