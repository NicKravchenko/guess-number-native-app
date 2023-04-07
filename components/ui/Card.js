import { StyleSheet, View } from "react-native";

import colors from "../../constants/colors";

function Card({ children, style }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 5,
    backgroundColor: colors.color3,
    borderRadius: 8,
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
