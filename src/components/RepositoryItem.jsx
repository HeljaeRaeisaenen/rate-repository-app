import { View, Image, Pressable } from "react-native";
import * as Linking from 'expo-linking';
import { withTheme } from 'react-native-paper';

import Text from "./Text";
import { getRepositoryStyles } from "./styles";

const UrlButton = ({listView, url, styles, theme}) => {
  if (listView) return;
  return <Pressable onPress={() => Linking.openURL(url)}>
      <View style={[styles.buttonLike, {flex: 1}]}>
        <Text style={{
          alignSelf: "center",
          color: theme.colors.textSecondary,
          fontSize: theme.fontSizes.subheading,
          }}>
          Open in Github
        </Text>
      </View>
    </Pressable>
}

const RepositoryItem = ({item, listView, theme }) => {  
  const styles = getRepositoryStyles();

  return <View testID={"repositoryItem"} style={styles.item}>
    <View style={{
      flexDirection: "row",
      flexWrap: "nowrap",
      flex: 1,
      alignContent: "flex-start"
    }}>
      <Image 
        style={styles.img}
        source={{uri: item.ownerAvatarUrl}}
      />
      <View style={{flexDirection: "column"}}>
        <Text style={[styles.title, {}]}>
          {item.fullName}
        </Text>
        <View style={[styles.textArea, {minHeight: 40}]}>
          <Text style={styles.textArea}>
            &quot;{item.description}&quot;
          </Text>
        </View>
        <View style={[styles.buttonLike, {alignSelf: "flex-start"}]}>
          <Text style={{color: theme.colors.textSecondary}}>
            {item.language}
          </Text>
        </View>
      </View>
    </View>
        
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <Text style={styles.statText}>
          {item.forksCount > 1000
          ? (Math.round(item.forksCount / 100)/10 + "k")
          : item.forksCount}
        </Text>
        <Text> forks
        </Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>
          {item.stargazersCount > 1000
          ? (Math.round(item.stargazersCount / 100)/10 + "k")
          : item.stargazersCount
          }
        </Text>
        <Text> stars
        </Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>
          {item.ratingAverage}
        </Text>
        <Text> rating
        </Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>
          {item.reviewCount}
        </Text>
        <Text> reviews
        </Text>
      </View>
    </View>
    {UrlButton({listView: listView, url:item.url, styles, theme})}
  </View>
}

export default withTheme(RepositoryItem);