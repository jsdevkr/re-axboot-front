import palette from "./colorPalette";
import { alpha } from "common/colorUtil";

export const defaultColors = {
  theme: "light",
  layout_sider_background: "#263245",
  layout_sider_menu_theme: "dark",
  layout_sider_text_color: alpha(palette.white, 0.95)
};

export const darkColors: typeof defaultColors = {
  theme: "dark",
  layout_sider_background: "#001529",
  layout_sider_menu_theme: "dark",
  layout_sider_text_color: alpha(palette.white, 0.85)
};

export type Colors = typeof defaultColors;
