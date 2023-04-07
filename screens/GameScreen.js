import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

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

function GameScreen({ userChoice, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  useEffect(() => {
    minBound = 1;
    maxBound = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBound,
      maxBound,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setRounds((curRounds) => [newRndNumber, ...curRounds]);
  }
  const guessRounds = rounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "lower")}
              style={styles.buttonsStyle}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "greater")}
              style={styles.buttonsStyle}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={[styles.buttonsContainer, { alignItems: "center" }]}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "lower")}
              style={styles.buttonsStyle}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "greater")}
              style={styles.buttonsStyle}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Guess a number</Title>
      {content}
      <View style={styles.resultsContainer}>
        <FlatList
          data={rounds}
          renderItem={(item) => (
            <GuessLogItem round={guessRounds - item.index} guess={item.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 12,
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonsStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resultsContainer: {
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
});
