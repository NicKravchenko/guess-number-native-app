import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";
function PrimaryButton({ children, onPress, style }) {
  function PressHandler() {
    onPress();
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={PressHandler}
        android_ripple={{ color: colors.color1 }}
      >
        <Text style={[styles.buttonText, style]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: colors.color2,
    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "open-sans",
  },
  pressed: {
    opacity: 0.75,
  },
});
