import React, { useState, useRef } from "react";
import { View, Button, TextInput, StyleSheet, Keyboard, Dimensions } from "react-native";
import CustomText from '../common/CustomText';
import Card from '../common/Card';
import MainButton from "../common/MainButton";
import useDimensions from "../common/useDimensions";

const StartScreen = ({ customerNumber, setCustomerNumber, onStartGame }) => {
  const window = useDimensions();

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

        <View style={window.width > 380 ? styles.buttonContainer : styles.buttonContainerSmall}>
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
    marginTop: Dimensions.get('window').width * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainerSmall: {},
  choice: {
    marginTop: 10,
  },
});

export default StartScreen;
