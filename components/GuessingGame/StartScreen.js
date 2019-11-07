import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const StartScreen = ({ customerNumber, setCustomerNumber, setCurrentScreen }) => {
  const [inputValue, setInputValue] = useState('');

  const startGame = () => {
    setInputValue('');
    setCurrentScreen('game');
  };

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Guess the number"
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="number-pad"
        editable={!customerNumber}
      />

      {
          !customerNumber
          ? (
            <View style={styles.buttonContainer}>
              <Button
                title="Reset"
                color="red"
                onPress={() => setCustomerNumber('')}
              />

              <Button
                title="Confirm"
                disabled={!inputValue}
                onPress={() => setCustomerNumber(Number(inputValue))}
              />
            </View>
          )
          : (
            <Button
              title="Start"
              onPress={startGame}
            />
          )
      }
    </View>
  );
};

const styles= StyleSheet.create({
  screen: {
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});

export default StartScreen;
