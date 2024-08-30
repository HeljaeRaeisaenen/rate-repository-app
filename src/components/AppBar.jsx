import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
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
    margin: theme.margin, 
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text style={styles.appBar}>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;