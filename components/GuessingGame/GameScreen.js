import React, { useState } from "react";
import { Button, View, StyleSheet, Alert } from "react-native";
import CustomText from "../common/CustomText";
import Card from "../common/Card";

const generateRandomNumber = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

const defaultRange = { min: 0, max: 100 };
const defaultNumber = generateRandomNumber(defaultRange);

const GameScreen = ({ customerNumber, addAttempt, addCheat, onFinishGame }) => {
  const [{ min, max }, setRange] = useState(defaultRange);
  const [computerNumber, setComputerNumber] = useState(defaultNumber);

  const computerGuessed = customerNumber === computerNumber;

  const clickHandler = (type) => {
    let newMaxValue = max;
    let newMinValue = min;

    if (
      (type === 'lower' && customerNumber > computerNumber) ||
      (type === 'greater' && customerNumber < computerNumber)
    ) {
      return Alert.alert(
        'Dont\'t lie',
        'Computer know everything',
        [
          { text: 'Sorry!', style: 'cancel', onPress: addCheat },
        ],
      );
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
    onFinishGame();
  };

  return (
    <Card>
      <CustomText style={styles.message}>Computer think that your number is:</CustomText>

      <CustomText type="title" style={styles.messageBold}>{computerNumber}</CustomText>

      {
        !computerGuessed &&
        <View style={styles.buttonContainer}>
          <CustomText>My number is: </CustomText>

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
    </Card>
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
  },
});

export default GameScreen;
