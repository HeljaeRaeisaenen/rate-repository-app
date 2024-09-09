import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { useTheme } from "react-native-paper";

//import theme from "./theme";

export const getMainStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "flex-start",
    },
  });
};

export const getTextStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
      color: theme.colors.textSecondary,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    fontSizeSubheading: {
      fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
      fontWeight: theme.fontWeights.bold,
    },
  });
};

export const getAppBarStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignSelf: "stretch",
      backgroundColor: theme.colors.primary,
    },
    appBar: {
      fontSize: theme.fontSizes.title,
      color: theme.colors.textSecondary,
      borderColor: theme.colors.secondary,
      borderStyle: "dotted",
      borderRadius: 10,
      borderWidth: 5,
      margin: theme.margin,
      textShadowColor: "black",
      textShadowRadius: 7,
    },
  });
};

export const getFormStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "flex-start",
      maxWidth: Dimensions.get("window").width,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 8,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 8,
      minWidth: 200,
    },
    textInput: {
      minWidth: 300,
      borderRadius: 3,
      borderWidth: 2,
      borderColor: "grey",
      padding: 5,
      margin: 5,
    },
    submitButton: {
      minWidth: 300,
      alignContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.secondary,
      borderRadius: 3,
      padding: 5,
      margin: 5,
    },
  });
};

export const getRepositoryStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    item: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: Dimensions.get("window").width - 16,
      minWidth: Dimensions.get("window").width * 0.7,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 8,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 8,
    },
    title: {
      fontSize: theme.fontSizes.heading,
      fontWeight: theme.fontWeights.bold,
      padding: 5,
      width: Dimensions.get("window").width * 0.8,
    },
    textArea: {
      flexWrap: "wrap",
      flexShrink: 1,
      flex: 1,
      flexGrow: 1,
      flexDirection: "row",
      padding: 5,
    },
    img: {
      alignSelf: "flex-start",
      width: 60,
      height: 60,
      borderRadius: 5,
      marginRight: 10,
    },
    stats: {
      flexDirection: "row",
      padding: 10,
      flex: 1,
      alignContent: "space-between",
    },
    statItem: {
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
    },
    statText: {
      fontWeight: "bold",
      fontSize: theme.fontSizes.subheading,
    },
    buttonLike: {
      backgroundColor: theme.colors.secondary,
      borderRadius: 3,
      padding: 5,
      margin: 5,
    },
    ratingIcon: {
      height: 60,
      width: 60,
      borderRadius: 30,
      borderWidth: 5,
      borderColor: theme.colors.primary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    rating: {
      color: theme.colors.accent,
      fontSize: theme.fontSizes.heading,
      fontWeight: "bold",
    },
  });
};
