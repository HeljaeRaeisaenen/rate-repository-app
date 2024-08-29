import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      fontSize: 28,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });

const RepositoryItem = props => {
    return <Text>
        <Text style={styles.title}>
            {props.item.fullName}
            {"\n"}
        </Text>
        <Text style={styles.item}>
            &quot;{props.item.description}&quot;{"\n"}
            Language: {props.item.language}{"\n"}
            {props.item.forksCount} forks{"\n"}
            {props.item.stargazersCount} stargazers{"\n"}
            Average rating: {props.item.ratingAverage}{"\n"}
            {props.item.reviewCount} reviews{"\n"}
        </Text>
    </Text>
}

export default RepositoryItem;