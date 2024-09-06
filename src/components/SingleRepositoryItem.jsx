import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { useParams } from 'react-router-dom';
import * as Linking from 'expo-linking';

import Text from "./Text";
import theme from "./theme";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const ReviewItem= ({ item }) => {
  return <View>
    <Text>
      an item
    </Text>
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
    renderItem={({ item }) => <ReviewItem review={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => <RepositoryItem item={repository} listView={false}/>}
    // ...
  />
}

export default SingleRepositoryView;