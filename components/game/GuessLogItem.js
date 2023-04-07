import { View, Text, StyleSheet } from "react-native";

function GuessLogItem(props) {
  return (
    <View style={styles.listItem}>
      <Text styles={styles.itemText}>#{props.round}</Text>
      <Text styles={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  itemText: {},
});
