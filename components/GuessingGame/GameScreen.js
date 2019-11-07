import React, { useState, Fragment } from "react";
import { Button, Text, View, StyleSheet, Alert } from "react-native";

const generateRandomNumber = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

const defaultRange = { min: 0, max: 100 };
const defaultNumber = generateRandomNumber(defaultRange);

const GameScreen = ({ customerNumber, addAttempt, setCurrentScreen }) => {
  const [{ min, max }, setRange] = useState(defaultRange);
  const [computerNumber, setComputerNumber] = useState(defaultNumber);

  const computerGuessed = customerNumber === computerNumber;

  const clickHandler = (type) => {
    let newMaxValue = max;
    let newMinValue = min;

    if ((type === 'lower' && customerNumber > computerNumber) || (type === 'greater' && customerNumber < computerNumber)) {
      return Alert.alert('Dont\'t lie', 'Computer know everything');
    }

    if (type === 'lower') newMaxValue = computerNumber - 1;

    if (type === 'greater') newMinValue = computerNumber + 1;

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
    <Fragment>
      <Text style={styles.message}>Computer think that your number is:</Text>

      <Text style={styles.messageBold}>{computerNumber}</Text>

      {
        !computerGuessed &&
        <View style={styles.buttonContainer}>
          <Text>My number is: </Text>

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
    </Fragment>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
  },
  messageBold: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameScreen;
