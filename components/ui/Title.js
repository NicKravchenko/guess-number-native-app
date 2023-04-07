import { Text, StyleSheet, Platform } from "react-native";

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
    borderWidth: Platform.select({ ios: 3, android: 2 }),
    borderColor: Platform.OS === "android" ? colors.color7 : colors.color6,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
