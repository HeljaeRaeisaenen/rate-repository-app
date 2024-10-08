import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { withTheme } from 'react-native-paper';

import Text from './Text';
import { getFormStyles } from './styles';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be between 5 and 30 characters long.")
    .max(30, "Username must be between 5 and 30 characters long.")
    .required("Username is required."),
  password: yup
    .string()
    .min(5, "Password must be between 5 and 50 characters long.")
    .max(50, "Password must be between 5 and 50 characters long.")
    .required("Password is required."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'),null], "Passwords must match.")
    .required("Password confirmation is required."),
});

const SignUpForm = ( {onSubmit, theme} ) => {
  styles = getFormStyles();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.subheading, margin: 5}}>
        Create a new account
      </Text>
      <View>
        <TextInput
          style={[
            styles.textInput,
            formik.touched.username && formik.errors.username ? {borderColor: theme.colors.error} : {}
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
            formik.touched.password && formik.errors.password ? {borderColor: theme.colors.error} : {}
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

      <View>
        <TextInput
          style={[
            styles.textInput,
            formik.touched.passwordConfirm && formik.errors.passwordConfirm ? {borderColor: theme.colors.error} : {}
          ]}
          placeholder="Password again"
          secureTextEntry={true}
          value={formik.values.passwordConfirm}
          onChangeText={formik.handleChange('passwordConfirm')}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <Text style={{
          color: theme.colors.error,
          margin: 5
        }}>
          {formik.errors.passwordConfirm}
        </Text>
      )}
      </View>
      <Pressable onPress={formik.handleSubmit}>
        <View style={styles.submitButton}>
          <Text>Sign up</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default withTheme(SignUpForm);