import { StyleSheet, View, Image, Dimensions } from "react-native";
import Text from "./Text";
import theme from "./theme";

const styles = StyleSheet.create({
    item: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "flex-start",
      maxWidth: Dimensions.get('window').width,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 8,
      backgroundColor: theme.colors.bg,
      borderRadius: 8
    },
    title: {
      fontSize: theme.fontSizes.heading,
      fontWeight: theme.fontWeights.bold,
      padding: 10,
      width:  Dimensions.get('window').width * 0.5
    },
    textArea: {
      flexWrap: "wrap",
      flexShrink: 1,
      flexDirection: "column",
      padding: 10,
    },
    img: {
      alignSelf: "flex-start",
      width: 60,
      height: 60,
      borderRadius: 5
    },
    stats: {
      flexDirection: "row",
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
        flexWrap: "nowrap",
        //alignContent: "space-between",
        alignItems: "space-between"
        }}>
        <Image 
          style={styles.img}
          source={{uri: props.item.ownerAvatarUrl}}
        />
        <View>
          <Text style={styles.title}>
            {props.item.fullName}
          </Text>
          <Text style={styles.textArea}>
            <Text style={styles.textArea}>
              &quot;{props.item.description}&quot;{"\n\n"}
            </Text>
            <View style={{
              backgroundColor: theme.colors.accent2,
              borderRadius: 3,
              }}>
              <Text style={{color: theme.colors.textSecondary}}>
                {props.item.language}
              </Text>
            </View>
          </Text>
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