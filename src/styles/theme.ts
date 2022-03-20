import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#797d9a",
      "400": "#616480",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    },
    blue: {
      900: "#003354",
      800: "#1a365d",
      700: "#153e75",
      600: "#2a69ac",
    },
  },
  styles: {
    global: {},
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});
