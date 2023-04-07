import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import colors from "../../constants/colors";

function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();
  const numberStyle = height < 390 ? { fontSize: 20 } : { fontSize: 36 };
  const marginTop =
    height < 390
      ? { marginTop: 10 }
      : deviceHeight < 650
      ? { marginTop: 40 }
      : { marginTop: 90 };

  return (
    <View style={[styles.container, marginTop]}>
      <Text style={[styles.text, numberStyle]}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.color6,
    padding: deviceHeight < 650 ? 12 : 32,
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
