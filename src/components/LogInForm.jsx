import { TextInput, Pressable, View, StyleSheet, Dimensions } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';


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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters long.")
    .required("Username is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
});

const LogInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.subheading}}>
        Please enter your credentials 
      </Text>
      <View>
        <TextInput
          style={[
            styles.textInput,
            formik.errors.username ? {borderColor: theme.colors.error} : {}
          ]}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
        <Text style={{
          color: theme.colors.error
        }}>
          {formik.errors.username}
        </Text>
      )}
      </View>
      <View>
        <TextInput
          style={[
            styles.textInput,
            formik.errors.password ? {borderColor: theme.colors.error} : {}
          ]}
          placeholder="Password"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{
          color: theme.colors.error,
          margin: 5
        }}>
          {formik.errors.password}
        </Text>
      )}
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