import { Text, View, Image, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>Number of Rounds:</Text>
      <Text style={styles.resultText}>{roundsNumber}</Text>
      <Text style={styles.summaryText}>Number was:</Text>
      <Text style={styles.resultText}>{userNumber}</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onRestart} style={styles.buttonText}>
          NEW GAME
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    textAlign: "center",
    fontSize: 24,
    color: colors.color7,
  },
  resultText: {
    textAlign: "center",
    fontSize: 34,
    color: colors.color6,
  },
  buttonContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    fontSize: 30,
    paddingVertical: 8,
    color: colors.color4,
    fontFamily: "open-sans-bold",
  },
});
