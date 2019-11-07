import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const generateRandomNumber = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

const defaultRange = { min: 0, max: 10 };
const defaultNumber = generateRandomNumber(defaultRange);

const GameScreen = ({ customerNumber, addAttempt, setCurrentScreen }) => {
  const [{ min, max }, setRange] = useState(defaultRange);
  const [computerNumber, setComputerNumber] = useState(defaultNumber);

  const computerGuessed = customerNumber === computerNumber;

  const clickHandler = type => {
    let newMaxValue = max;
    let newMinValue = min;

    if (type === 'lower') {
      newMaxValue = computerNumber - 1;
    }

    if (type === 'greater') {
      newMinValue = computerNumber + 1;
    }

    const newValues = { max: newMaxValue, min: newMinValue };
    const newNumber = generateRandomNumber(newValues);

    addAttempt();
    setRange(newValues);
    setComputerNumber(newNumber);
  };

  const finishGame = () => {
    setComputerNumber(0);
    setCurrentScreen('gameOver');
  };

  return (
    <View>
      <Text>Computer think that your number is {computerNumber}</Text>

      {
        !computerGuessed &&
        <View style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={() => clickHandler('lower')}
          />

          <Button
            title="Greater"
            onPress={() => clickHandler('greater')}
          />
        </View>
      }

      {
        computerGuessed &&
        <Button
          title="Game Over!"
          onPress={finishGame}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  }
});

export default GameScreen;
