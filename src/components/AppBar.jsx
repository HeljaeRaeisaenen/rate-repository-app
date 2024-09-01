import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    backgroundColor: theme.colors.accent,
  },
  appBar: {
    fontSize: theme.fontSizes.title,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.accent2,
    borderStyle: "dotted",
    borderRadius: 10,
    borderWidth: 5,
    margin: theme.margin,
    textShadowColor: "black",
    textShadowRadius: 7,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to={"/"}>
        <Text style={styles.appBar}> Repositories</Text>
      </Link>
      <Link to={"/signin"}>
        <Text style={styles.appBar}> Sign in</Text>
      </Link>
    </ScrollView>
  </View>;
};

export default AppBar;