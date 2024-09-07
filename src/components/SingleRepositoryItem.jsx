import { View, FlatList } from "react-native";
import { useParams } from 'react-router-dom';
import { format } from "date-fns";
import { withTheme } from 'react-native-paper';

import Text from "./Text";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { getRepositoryStyles } from "./styles";

const ReviewItem= ({ item, theme }) => {
  const styles = getRepositoryStyles();

  return <View style={[styles.item, {flexDirection: "row"}]}>
    <View style={styles.ratingIcon}>
      <Text style={styles.rating}>
        {item.rating}
      </Text>
    </View>

    <View style={[styles.textArea, {flexDirection: "column"}]}>
      <Text style={[styles.textArea, {fontWeight: "bold", fontSize: theme.fontSizes.subheading}]}>
        {item.user.username}
      </Text>
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

const SingleRepositoryView = ({ theme }) => {
  const repository = useRepository({id: useParams().repoId}).repository;
  if (!repository) return <></>

  const reviews = repository.reviews 
    ? repository.reviews.edges.map(edge => edge.node)
    : [];
  
  return <FlatList
    data={reviews}
    renderItem={({ item }) => <ReviewItem item={item} theme={theme} />}
    keyExtractor={item => item.id}
    ListHeaderComponent={() => <RepositoryItem item={repository} listView={false}/>}
  />
}

export default withTheme(SingleRepositoryView);