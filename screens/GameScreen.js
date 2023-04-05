import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

function GameScreen({ userChoice }) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (direction === "lower") {
      maxBound = currentGuess;
      const newRndNumber = generateRandomBetween(
        minBound,
        maxBound,
        currentGuess
      );
    } else {
      minBound = currentGuess;
      const newRndNumber = generateRandomBetween(
        minBound,
        maxBound,
        currentGuess
      );
    }

    return (
      <View style={styles.screen}>
        <Title>Guess a number</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or lower?</Text>
          <View>
            <PrimaryButton onPress={nextGuessHandler}>-</PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler}>+</PrimaryButton>
          </View>
        </View>
        {/* <View>LOG ROUNDS</View> */}
      </View>
    );
  }
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 12,
  },
});
