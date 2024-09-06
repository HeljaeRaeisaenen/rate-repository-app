import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';

import Text from './Text';
import theme from './theme';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import useSignOut from '../hooks/useSignOut';

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
  const { user } = useAuthenticatedUser();
  const navigate = useNavigate();
  const [signOut] = useSignOut();

  const handlePress = async () => {
    await signOut();
    return navigate("/");

  }

  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to={"/"}>
        <Text style={styles.appBar}> Repositories</Text>
      </Link>
      {user ? 
      <>
        <Link to={"/review"}>
          <Text style={styles.appBar}> Give a review</Text>
        </Link>
        <Pressable onPress={handlePress}>
          <Text style={styles.appBar}> {user.username} - Sign out</Text>
        </Pressable>
      </>
      : 
      <>
        <Link to={"/signin"}>
          <Text style={styles.appBar}> Sign in</Text>
        </Link>
        <Link to={"/signup"}>
          <Text style={styles.appBar}> Sign up</Text>
        </Link>
      </>
      }
    </ScrollView>
  </View>;
};

export default AppBar;