import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.color6,
    padding: 22,
    margin: 22,
    borderRadius: 12,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 24,
    color: colors.color6,
    fontWeight: "bold",
    textAlign: "center",
  },
});
