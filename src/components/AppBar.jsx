import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.bg,
  },
  appBar: {
    fontSize: theme.fontSizes.title,
    margin: theme.margin, 
  }
});

const AppBar = () => {
  return <View style={styles.container}><Text style={styles.appBar}>Repositories</Text></View>;
};

export default AppBar;