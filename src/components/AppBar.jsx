import { View, ScrollView, Pressable } from 'react-native';
import { Link, useNavigate } from 'react-router-native';

import Text from './Text';
//import { appBarStyles as styles } from './styles';
import { getAppBarStyles } from './styles';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import useSignOut from '../hooks/useSignOut';


const AppBar = () => {
  const styles = getAppBarStyles();
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