import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

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

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 300,
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
    fontSize: deviceWidth < 380 ? 22 : 24,
    color: colors.color7,
  },
  resultText: {
    textAlign: "center",
    fontSize: deviceWidth < 380 ? 28 : 34,
    color: colors.color6,
  },
  buttonContainer: {
    marginTop: deviceWidth < 380 ? 15 : 30,
    marginHorizontal: 30,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    fontSize: deviceWidth < 380 ? 25 : 30,
    paddingVertical: 8,
    color: colors.color4,
    fontFamily: "open-sans-bold",
  },
});
