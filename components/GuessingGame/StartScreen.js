import React, { useState, useRef } from "react";
import { View, Button, TextInput, StyleSheet, Text, Keyboard } from "react-native";
import Card from '../common/Card';

const StartScreen = ({ customerNumber, setCustomerNumber, onStartGame }) => {
  const [inputValue, setInputValue] = useState('');

  const numberInput = useRef();

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
            <Text style={styles.message}>
              You guess <Text style={styles.messageBold}>{customerNumber}</Text>, let's start?
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                title="Start"
                onPress={startGame}
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
    fontWeight: 'bold',
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
