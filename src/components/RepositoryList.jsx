import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from "react-router-dom";

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/userRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  return <RepositoryListContainer repositories={repositories} navigate={navigate} />
};

export const RepositoryListContainer = ({ repositories, navigate }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => 
        <Pressable onPress={() => {navigate(`/${item.id}`)}}>
          <RepositoryItem item={item} listView={true} />
        </Pressable>
      }
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;
//        
