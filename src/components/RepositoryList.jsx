import { useState } from 'react';
import { FlatList, View, Pressable } from 'react-native';
import { useNavigate } from "react-router-native";
import { Menu, Button } from 'react-native-paper';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/userRepositories';

const ItemSeparator = () => <View style={{separator: {height: 10,}}} />;

const ListOrderPicker = ({setOrderBy, setOrderDirection}) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return <View style={{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }}>
    <Menu visible={visible}
    onDismiss={closeMenu}
    anchor={
      <Button mode='outlined' onPress={openMenu}>Sort</Button>
    }>
      <Menu.Item onPress={() => {setOrderBy(null); setOrderDirection(null)}} title="Newest"/>
      <Menu.Item 
        onPress={() => {setOrderBy("RATING_AVERAGE");setOrderDirection("DESC");}}
        title="Highest rated"
      />
      <Menu.Item onPress={() => {setOrderBy("RATING_AVERAGE"); setOrderDirection("ASC");}} title="Lowest rated"/>
      </Menu>
  </View>
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState(null);
  const [orderDirection, setOrderDirection] = useState(null);
  const { repositories } = useRepositories({orderBy, orderDirection});
  const navigate = useNavigate();

  return <RepositoryListContainer 
    repositories={repositories}
    navigate={navigate}
    setOrderBy={setOrderBy}
     setOrderDirection={setOrderDirection}
    />
};

export const RepositoryListContainer = ({ repositories, navigate, setOrderBy, setOrderDirection }) => {
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
      ListHeaderComponent={() => <ListOrderPicker setOrderBy={setOrderBy} setOrderDirection={setOrderDirection}/>}
    />
  );
};

export default RepositoryList;
//        
