import { View, Text, StyleSheet, Dimensions } from "react-native";

import colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
console.log(deviceWidth, deviceHeight);
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.color6,
    padding: deviceWidth < 380 ? 12 : 32,
    margin: 10,
    marginTop: deviceHeight < 650 ? 40 : 90,
    borderRadius: 12,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  text: {
    fontSize: 36,
    color: colors.color6,
    fontWeight: "bold",
    textAlign: "center",
  },
});
