import { FlatList } from 'react-native';

import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const user = useAuthenticatedUser({includeReviews: true});
  const reviews = user.reviews
    ? user.reviews.edges.map(edge => edge.node)
    : [];
  
  return <FlatList
    data={reviews}
    renderItem={({ item }) => <ReviewItem item={item} reviewListView={true} />}
    keyExtractor={item => item.id}
  />
};

export default ReviewList;