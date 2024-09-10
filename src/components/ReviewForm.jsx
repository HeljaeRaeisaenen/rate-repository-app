import { TextInput, Pressable, View, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { withTheme } from 'react-native-paper';

import Text from './Text';
import { getFormStyles } from './styles';

const initialValues = {
  username: '',
  repositoryName: '',
  rating: '',
  review: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Repository owner's username is required."),
  repositoryName: yup
    .string()
    .required("Repository name is required."),
  rating: yup
    .number()
    .integer()
    .typeError("Rating must be given on a scale of 0 to 100.")
    .min(0, "Rating must be given on a scale of 0 to 100.")
    .max(100, "Rating must be given on a scale of 0 to 100.")
    .required("Rating is required."),
  text: yup
    .string()
    .max(800, "Review must not exceed 800 character.")
    .notRequired(),

  });


const ReviewForm = ({onSubmit, theme}) => {
  const styles = getFormStyles();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return <ScrollView contentContainerStyle={styles.container}>
    <Text style={{fontSize: theme.fontSizes.subheading, margin: 5}}>
      Leave a review for a repository
    </Text>

    <View>
      <TextInput
        style={[
          styles.textInput,
          formik.touched.ownerName && formik.errors.ownerName ? {borderColor: theme.colors.error} : {}
        ]}
        placeholder="Repository owner"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
      <Text style={{
        color: theme.colors.error
      }}>
        {formik.errors.ownerName}
      </Text>
      )}
      </View>
      <View>
        <TextInput
          style={[
            styles.textInput,
            formik.touched.repositoryName && formik.errors.repositoryName ? {borderColor: theme.colors.error} : {}
          ]}
          placeholder="Repository name"
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange('repositoryName')}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text style={{
          color: theme.colors.error,
          margin: 5
        }}>
          {formik.errors.repositoryName}
        </Text>
      )}
      </View>

      <View>
        <TextInput
          keyboardType='numeric'
          style={[
            styles.textInput,
            formik.touched.rating && formik.errors.rating ? {borderColor: theme.colors.error} : {}
          ]}
          placeholder="Rating"
          value={formik.values.rating}
          onChangeText={formik.handleChange('rating')}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text style={{
          color: theme.colors.error,
          margin: 5
        }}>
          {formik.errors.rating}
        </Text>
      )}
      </View>

      <View>
        <TextInput
          style={[
            styles.textInput,
            formik.touched.text && formik.errors.text ? {borderColor: theme.colors.error} : {}
          ]}
          placeholder="Review text"
          value={formik.values.text}
          multiline={true}
          onChangeText={formik.handleChange('text')}
        />
        {formik.touched.text && formik.errors.text && (
          <Text style={{
          color: theme.colors.eSignInrror,
          margin: 5
        }}>
          {formik.errors.text}
        </Text>
      )}
      </View>
      <Pressable onPress={formik.handleSubmit}>
        <View style={styles.submitButton}>
          <Text>Give a review</Text>
        </View>
      </Pressable>
  </ScrollView>
}

export default withTheme(ReviewForm);