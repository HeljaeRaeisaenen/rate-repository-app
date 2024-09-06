import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { useParams } from 'react-router-dom';
import { format } from "date-fns";

import Text from "./Text";
import theme from "./theme";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { repositoryStyles as styles } from "./RepositoryItem";

const ReviewItem= ({ item }) => {
  return <View style={[styles.item, {flexDirection: "row"}]}>
    <View style={styles.ratingIcon}>
      <Text style={styles.rating}>
        {item.rating}
      </Text>
    </View>

    <View style={[styles.textArea, {flexDirection: "column"}]}>
      <Text style={[styles.textArea,{fontWeight: "bold", fontSize: theme.fontSizes.subheading}]}>
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

const SingleRepositoryView = () => {
  // no props, rendered only in single view, get id from params
  const repository = useRepository({id: useParams().repoId}).repository;
  if (!repository) return <></>

  const reviews = repository.reviews 
    ? repository.reviews.edges.map(edge => edge.node)
    : [];
  
  return <FlatList
    data={reviews}
    renderItem={({ item }) => <ReviewItem item={item} />}
    keyExtractor={item => item.id}
    ListHeaderComponent={() => <RepositoryItem item={repository} listView={false}/>}
    // ...
  />
}

export default SingleRepositoryView;