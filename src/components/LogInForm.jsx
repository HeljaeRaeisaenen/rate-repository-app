import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { withTheme } from 'react-native-paper';

import Text from './Text';
//import { formStyles as styles } from './styles';
import { getFormStyles } from './styles';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 characters long.")
    .required("Username is required."),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long.")
    .required("Password is required."),
});

const LogInForm = ( {onSubmit, theme } ) => {
  const styles = getFormStyles();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={{fontSize: theme.fontSizes.subheading, margin: 5}}>
        Sign in - please enter your credentials
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
      <Pressable onPress={formik.handleSubmit}>
        <View style={styles.submitButton}>
          <Text>Sign in</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default withTheme(LogInForm);