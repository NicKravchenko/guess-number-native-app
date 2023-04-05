import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    console.log(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        // placeholder="XX"
        // placeholderTextColor="#ffe19c"
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setEnteredNumber(text)}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#b388eb",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ffe19c",
    borderBottomWidth: 1,
    color: "#ffe19c",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
