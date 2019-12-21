const palette = {
  white: "#fff",
  black: "#000"
};

export const lightColors = {
  white: palette.white,
  black: palette.black
};

export const darkColors = {
  white: palette.black,
  black: palette.white
};

export type Colors = typeof lightColors;
