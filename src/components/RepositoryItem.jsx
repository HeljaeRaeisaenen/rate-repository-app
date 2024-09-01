import { StyleSheet, View, Image, Dimensions } from "react-native";
import Text from "./Text";
import theme from "./theme";

const styles = StyleSheet.create({
    item: {
      display: "flex",
      flexDirection: "column",
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
    }
  });

const RepositoryItem = props => {
    return <View style={styles.item}>
      <View style={{
        flexDirection: "row",
        flex: 1,
        flexWrap: "nowrap",
        alignItems: "space-between"
        }}>
        <Image 
          style={styles.img}
          source={{uri: props.item.ownerAvatarUrl}}
        />
        <View style={{flexDirection: "column", }}>
          <Text style={styles.title}>
            {props.item.fullName}
          </Text>
          <View style={styles.textArea}>
            <Text style={styles.textArea}>
              &quot;{props.item.description}&quot;
            </Text>
          </View>
          <View style={{
              backgroundColor: theme.colors.accent2,
              borderRadius: 3,
              alignSelf: "flex-start",
              padding: 5,
              margin: 5,
              }}>
              <Text style={{color: theme.colors.textSecondary}}>
                {props.item.language}
              </Text>
            </View>
          </View>
          </View>
          
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statText}>
                {Math.round(props.item.forksCount / 100)/10}k
              </Text>
              <Text> forks
              </Text>
            </View>
            <View style={styles.statItem}>
            <Text style={styles.statText}>
                {Math.round(props.item.stargazersCount / 100)/10}k
              </Text>
              <Text> stars
              </Text>
            </View>
            <View style={styles.statItem}>
            <Text style={styles.statText}>
                {props.item.ratingAverage}
              </Text>
              <Text> rating
              </Text>
            </View>
            <View style={styles.statItem}>
            <Text style={styles.statText}>
                {props.item.reviewCount}
              </Text>
              <Text> reviews
              </Text>
            
          </View>
      </View>
    </View>
}

export default RepositoryItem;