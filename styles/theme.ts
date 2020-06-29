import palette from "./colorPalette";
import DARK from "./palette/dark";
import LIGHT from "./palette/light";

const white = palette.white;
const black = palette.black;

const transparent = "transparent";

const lightColors = {
  bnt_bg: white,
  txt_default: white,

  btn_primary_bg: LIGHT.BLUE_50,
  btn_primary_border: LIGHT.BLUE_50,
  btn_primary_color: LIGHT.INK_5,
  btn_primary_hover_bg: LIGHT.BLUE_40,
  btn_primary_hover_border: LIGHT.BLUE_40,
  btn_primary_hover_color: LIGHT.INK_5,
  btn_primary_active_bg: LIGHT.BLUE_60,
  btn_primary_active_border: LIGHT.BLUE_60,
  btn_primary_active_color: LIGHT.INK_5,
  btn_primary_disabled_bg: LIGHT.BLUE_50,
  btn_primary_disabled_border: LIGHT.BLUE_50,
  btn_primary_disabled_color: LIGHT.INK_5,
  btn_default_bg: LIGHT.INK_5,
  btn_default_border: LIGHT.INK_30,
  btn_default_color: LIGHT.INK_70,
  btn_default_hover_bg: LIGHT.INK_10,
  btn_default_hover_border: LIGHT.INK_30,
  btn_default_hover_color: LIGHT.INK_70,
  btn_default_active_bg: LIGHT.INK_10,
  btn_default_active_border: LIGHT.INK_30,
  btn_default_active_color: LIGHT.INK_100,

  btn_disable_color: LIGHT.INK_100,
  btn_disable_bg: LIGHT.INK_5,
  btn_disable_border: LIGHT.INK_30,

  btn_secondary_bg: transparent,
  btn_secondary_border: transparent,
  btn_secondary_color: LIGHT.INK_70,
  btn_secondary_hover_bg: LIGHT.BLUE_7,
  btn_secondary_hover_border: LIGHT.BLUE_7,
  btn_secondary_hover_color: LIGHT.BLUE_50,
  btn_secondary_active_bg: LIGHT.BLUE_A10,
  btn_secondary_active_border: LIGHT.BLUE_A10,
  btn_secondary_active_color: LIGHT.BLUE_80,

  btn_danger_bg: LIGHT.INK_5,
  btn_danger_border: LIGHT.YELLOW_50,
  btn_danger_color: LIGHT.YELLOW_90,
  btn_danger_hover_bg: LIGHT.YELLOW_5,
  btn_danger_hover_border: LIGHT.YELLOW_50,
  btn_danger_hover_color: LIGHT.INK_70,
  btn_danger_active_bg: LIGHT.YELLOW_5,
  btn_danger_active_border: LIGHT.YELLOW_50,
  btn_danger_active_color: LIGHT.INK_100,
};

const darkColors: typeof lightColors = {
  bnt_bg: black,
  txt_default: black,
  btn_primary_bg: LIGHT.BLUE_50,
  btn_primary_border: LIGHT.BLUE_50,
  btn_primary_color: LIGHT.INK_5,
  btn_primary_hover_bg: LIGHT.BLUE_40,
  btn_primary_hover_border: LIGHT.BLUE_40,
  btn_primary_hover_color: LIGHT.INK_5,
  btn_primary_active_bg: LIGHT.BLUE_60,
  btn_primary_active_border: LIGHT.BLUE_60,
  btn_primary_active_color: LIGHT.INK_5,
  btn_primary_disabled_bg: LIGHT.BLUE_50,
  btn_primary_disabled_border: LIGHT.BLUE_50,
  btn_primary_disabled_color: LIGHT.INK_5,
  btn_default_bg: LIGHT.INK_5,
  btn_default_border: LIGHT.INK_30,
  btn_default_color: LIGHT.INK_70,
  btn_default_hover_bg: LIGHT.INK_10,
  btn_default_hover_border: LIGHT.INK_30,
  btn_default_hover_color: LIGHT.INK_70,
  btn_default_active_bg: LIGHT.INK_10,
  btn_default_active_border: LIGHT.INK_30,
  btn_default_active_color: LIGHT.INK_100,

  btn_disable_color: LIGHT.INK_100,
  btn_disable_bg: LIGHT.INK_5,
  btn_disable_border: LIGHT.INK_30,

  btn_secondary_bg: transparent,
  btn_secondary_border: transparent,
  btn_secondary_color: LIGHT.INK_70,
  btn_secondary_hover_bg: LIGHT.BLUE_7,
  btn_secondary_hover_border: LIGHT.BLUE_7,
  btn_secondary_hover_color: LIGHT.BLUE_50,
  btn_secondary_active_bg: LIGHT.BLUE_A10,
  btn_secondary_active_border: LIGHT.BLUE_A10,
  btn_secondary_active_color: LIGHT.BLUE_80,

  btn_danger_bg: LIGHT.INK_5,
  btn_danger_border: LIGHT.YELLOW_50,
  btn_danger_color: LIGHT.YELLOW_90,
  btn_danger_hover_bg: LIGHT.YELLOW_5,
  btn_danger_hover_border: LIGHT.YELLOW_50,
  btn_danger_hover_color: LIGHT.INK_70,
  btn_danger_active_bg: LIGHT.YELLOW_5,
  btn_danger_active_border: LIGHT.YELLOW_50,
  btn_danger_active_color: LIGHT.INK_100,
};

const commons = {
  minPanelWidth: 300,
  lSiderWidth: 66,
  rSiderWidth: 23,
  heading_font_family: "sans-serif",

  border_radius_base: "2px",

  modal_header_height: "40px",

  // ~~
  screen_xs: "380px",
  screen_sm: "476px",
  screen_md: "768px",
  screen_lg: "992px",
  screen_xl: "1200px",
  screen_xxl: "1600px",

  ui_helper_zindex: 100,

  checkbox_size: "16px",

  btn_border_radius_base: "3px",
  btn_border_radius_sm: "3px",
  btn_height_base: "28px",
  btn_height_lg: "36px",
  btn_height_sm: "22px",

  tree_title_height: "28px",
  tree_child_padding: "10px",
};

const light = {
  ...lightColors,
  ...commons,
};

const dark = {
  ...darkColors,
  ...commons,
};

export const themePalette = {
  light,
  dark,
};

export default dark;
