import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

//dark mode theme
export const darkMode = {
  light: {
    theme: "light",
    color: "#000000",
    background: "#FFFFFF",
  },
  dark: {
    theme: "dark",
    color: "#FFFFFF",
    background: "#000000",
  },
};

{
  /* theme colors */
}
export const COLORS = {
  blue: "#013163",
  lightBlue: "#0096FF",
  greyRgba: `rgba(46,48,53, 0.9)`,
  teal: "#00AAB2",
  tealRGB: "0, 128, 128",
  tealDark: "#008494",
  tealDarker: "#0096aa",
  purple: "#9E69C9",
  purpleDark: "#720e9e",
  purpleDarker: "#4B0082",
  purpleTransparent: `rgba(153,50,204, 0.6)`,
  purpleRGB: "123, 30, 154",
  darkPurple: "#5B4C72",
  darkGreen: "#4D4D4D",
  brown: "#A96B70",
  lightBrown: "#D69EA2",
  gray: "#C5BBCC",
  lightGray: "#D3D3D3",
  darkGray: "#6B6B6B",
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  red: "#ff0000",
  lightRed: "#FFF1F0",
  green: "#44d044",
  greenActive: "#009C6C",
  lightGreen: "#E6FEF0",
  amber: "#FFBF00",
  yellow: "#FFFF00",
  orange: "#e47200",
  pink: "#e11584",
  reechGray: "#44444444",
  reechLighterGray: "rgb(169,169,169)",
  opacityBlack: "rgba(0, 0, 0, 0.65)",
  opacityBlackDarker: "rgba(0, 0, 0, 0.75)",
  maroon: "#800000",
};

{
  /* theme sizes */
}
export const SIZES = {
  //global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  //font sizes
  h1: 50,
  h2: 30,
  h3: 22,
  h4: 20,
  h5: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  //app dimensions
  width,
  height,
};

{
  /* theme fonts*/
}
export const FONTS = {
  //title
  h1: { fontSize: SIZES.h1, lineHeight: 40 },
  h2: { fontSize: SIZES.h2, lineHeight: 36 },
  h3: { fontSize: SIZES.h3, lineHeight: 30 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontSize: SIZES.h5, lineHeight: 18 },
};
