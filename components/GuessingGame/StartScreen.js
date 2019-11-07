import React, { Fragment, useState } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import Card from '../common/Card';

const StartScreen = ({ customerNumber, setCustomerNumber, setCurrentScreen }) => {
  const [inputValue, setInputValue] = useState('');

  const inputHandler = value => setInputValue(value.replace(/[^0-9]/g, ''));
  const startGame = () => {
    setInputValue('');
    setCurrentScreen('game');
  };

  return (
    <Card>
      {
        Boolean(!customerNumber) ? (
            <TextInput
              style={styles.input}
              placeholder="Guess the number"
              value={inputValue}
              onChangeText={inputHandler}
              keyboardType="number-pad"
            />
        )
        : (
            <Text style={styles.message}>
              You guess <Text style={styles.messageBold}>{customerNumber}</Text>, let's start?
            </Text>
        )
      }

      <View style={styles.buttonContainer}>
        {
          !customerNumber ? (
              <Fragment>
                <Button
                  title="Reset"
                  color="red"
                  onPress={() => setInputValue('')}
                />

                <Button
                  title="Confirm"
                  disabled={!inputValue}
                  onPress={() => setCustomerNumber(Number(inputValue))}
                />
              </Fragment>
            )
            : (
              <Fragment>
                <Button
                  title="Cancel"
                  color="red"
                  onPress={() => setCustomerNumber('')}
                />

                <Button
                  title="Start"
                  onPress={startGame}
                />
              </Fragment>
            )
        }
      </View>
    </Card>
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
  }
});

export default StartScreen;
