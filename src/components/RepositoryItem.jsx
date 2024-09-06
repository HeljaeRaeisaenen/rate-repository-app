import { StyleSheet, View, Image, Dimensions, Pressable } from "react-native";
import * as Linking from 'expo-linking';

import Text from "./Text";
import theme from "./theme";

export const repositoryStyles = StyleSheet.create({
    item: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: Dimensions.get('window').width - 16,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 8,
      backgroundColor: theme.colors.bg,
      borderRadius: 8
    },
    title: {
      fontSize: theme.fontSizes.heading,
      fontWeight: theme.fontWeights.bold,
      padding: 5,
      width:  Dimensions.get('window').width * 0.8
    },
    textArea: {
      flexWrap: "wrap",
      flexShrink: 1,
      flex: 1,
      flexGrow: 1,
      flexDirection: "row",
      padding: 5,
    },
    img: {
      alignSelf: "flex-start",
      width: 60,
      height: 60,
      borderRadius: 5,
      marginRight: 10,
    },
    stats: {
      flexDirection: "row",
      padding: 10,
      flex: 1,
      alignContent: "space-between"
    },
    statItem: {
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
    },
    statText: {
      fontWeight: "bold",
      fontSize: theme.fontSizes.subheading,
    },
    buttonLike: {
      backgroundColor: theme.colors.accent2,
      borderRadius: 3,
      padding: 5,
      margin: 5,
    },
    ratingIcon: {
      height: 60,
      //flexGrow: 1,
      width: 60,
      borderRadius: 30,
      borderWidth: 5,
      borderColor: theme.colors.accent,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    rating: {
      color: theme.colors.accent,
      fontSize: theme.fontSizes.heading,
      fontWeight: "bold",
    }
  });
const styles = repositoryStyles;


const UrlButton = ({listView, url}) => {
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

const RepositoryItem = ({item, listView}) => {  
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
          {Math.round(item.forksCount / 100)/10}k
        </Text>
        <Text> forks
        </Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statText}>
          {Math.round(item.stargazersCount / 100)/10}k
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
    {UrlButton({listView: listView, url:item.url})}
  </View>
}

export default RepositoryItem;