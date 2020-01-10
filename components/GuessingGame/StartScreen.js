import React, { useState, useRef } from "react";
import { View, Button, TextInput, StyleSheet, Keyboard } from "react-native";
import CustomText from '../common/CustomText';
import Card from '../common/Card';
import MainButton from "../common/MainButton";

const StartScreen = ({ customerNumber, setCustomerNumber, onStartGame }) => {
  const [inputValue, setInputValue] = useState('');

  const numberInput = useRef(null);

  const inputHandler = value => setInputValue(value.replace(/[^0-9]/g, ''));

  const cancelChoice = () => {
    setInputValue('');
    setCustomerNumber('');
    numberInput.current.focus();
  };

  const selectNumber = () => {
    setCustomerNumber(Number(inputValue));
    Keyboard.dismiss();
  };

  const startGame = () => {
    setInputValue('');
    onStartGame();
  };

  return (
    <>
      <Card>
        <TextInput
          ref={numberInput}
          style={styles.input}
          placeholder="Guess the number"
          value={inputValue}
          onChangeText={inputHandler}
          keyboardType="number-pad"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color="red"
            onPress={cancelChoice}
          />

          <Button
            title="Confirm"
            disabled={!inputValue}
            onPress={selectNumber}
          />
        </View>
      </Card>

      {
        Boolean(customerNumber) && (
          <Card style={styles.choice}>
            <CustomText style={styles.message}>
              You guess <CustomText type="title" style={styles.messageBold}>{customerNumber}</CustomText>, let's start?
            </CustomText>

            <View style={styles.buttonContainer}>
              <MainButton
                title="Start"
                onPress={startGame}
                iconName="rocket"
              />
            </View>
          </Card>
        )
      }
    </>
  );
};

const styles= StyleSheet.create({
  input: {
    padding: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
  },
  messageBold: {
    fontSize: 24,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  choice: {
    marginTop: 10,
  },
});

export default StartScreen;
