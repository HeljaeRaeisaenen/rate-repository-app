import { FlatList } from "react-native";
import { useParams } from 'react-router-dom';

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";


const SingleRepositoryView = () => {
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
  />
}

export default SingleRepositoryView;