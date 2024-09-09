import { View } from "react-native";
import { Link } from "react-router-native";
import { format } from "date-fns";
import { withTheme } from 'react-native-paper';

import Text from "./Text";
import { getRepositoryStyles } from "./styles";

const ReviewItem = ({ item, theme, reviewListView }) => {
  const styles = getRepositoryStyles();

  return <View style={[styles.item, {flexDirection: "row", flex: 1}]}>
    <View style={styles.ratingIcon}>
      <Text style={styles.rating}>
        {item.rating}
      </Text>
    </View>
    <View style={[styles.textArea, {flexDirection: "column"}]}>
      {reviewListView ? (
        <Link to={`/${item.repositoryId}`}>
          <Text style={[styles.textArea, {fontWeight: "bold", fontSize: theme.fontSizes.subheading}]}>
            {item.repositoryId}
          </Text>
        </Link>)
      : (
        <Text style={[styles.textArea, {fontWeight: "bold", fontSize: theme.fontSizes.subheading}]}>
          {item.user.username}
        </Text>
      )}
      <Text style={styles.textArea}>
        {format(item.createdAt, "d.M.yyyy")}
      </Text>
      <View style={styles.textArea}>
        <Text style={{fontSize: theme.fontSizes.body}}>
          {item.text}
        </Text>
      </View>
    </View>
  </View>
}

export default withTheme(ReviewItem);