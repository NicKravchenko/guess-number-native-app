import { Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.color7,
    borderWidth: 2,
    borderColor: colors.color7,
    padding: 12,
  },
});
