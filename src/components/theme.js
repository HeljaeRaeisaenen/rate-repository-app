import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "black",
    textSecondary: "white",
    bg: "white",
    accent: "lightblue",
    accent2: "lightpink",
    error: "darkred",
  },
  fontSizes: {
    title: 32,
    heading: 28,
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  margin: 5,
};

export default theme;
