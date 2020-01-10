import React, { useState, useEffect } from "react";
import { Button, View, StyleSheet, Alert, FlatList } from "react-native";
import CustomText from "../common/CustomText";
import Card from "../common/Card";

const generateRandomNumber = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

const defaultRange = { min: 0, max: 100 };
const defaultNumber = generateRandomNumber(defaultRange);

const Item = ({ children }) => (
  <View style={styles.listItem}>
    <CustomText># {children}</CustomText>
  </View>
);

const GameScreen = ({ customerNumber, addAttempt, addCheat, onFinishGame, pastGuesses }) => {
  const [{ min, max }, setRange] = useState(defaultRange);
  const [computerNumber, setComputerNumber] = useState(defaultNumber);

  useEffect(() => {
    addAttempt(computerNumber);
  }, []);

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

    addAttempt(newNumber);
    setRange(newValues);
    setComputerNumber(newNumber);
  };

  const finishGame = () => {
    setComputerNumber(0);
    onFinishGame();
  };

  return (
    <>
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

      {
        Boolean(pastGuesses.length > 1) && (
          <>
            <CustomText type="title" style={styles.title}>Past guesses:</CustomText>

            <FlatList
              data={pastGuesses.filter((_, index) => index !== 0)}
              renderItem={({ item }) => <Item>{item}</Item>}
              keyExtractor={item => String(item)}
            />
          </>
        )
      }
    </>
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
  title: {
    fontSize: 16,
    marginTop: 15,
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default GameScreen;
