import { TextInput, Pressable, View, StyleSheet, Dimensions } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "flex-start",
    maxWidth: Dimensions.get('window').width,
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: theme.colors.bg,
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
    backgroundColor: theme.colors.accent2,
    borderRadius: 3,
    padding: 5,
    margin: 5,
  }
});

const initialValues = {
  username: '',
  password: '',
};

const LogInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.subheading}}>
        Please enter your credentials 
      </Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      <Pressable onPress={formik.handleSubmit}>
        <View style={styles.submitButton}>
          <Text>Sign in</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default LogInForm;