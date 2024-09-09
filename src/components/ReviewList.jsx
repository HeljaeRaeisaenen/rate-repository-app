import { useState } from 'react';
import { FlatList, View, Pressable } from 'react-native';
import { useNavigate } from "react-router-native";
import { Menu, Button, Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

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