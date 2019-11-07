import React, { useState } from "react";
import { View } from "react-native";
import Header from "./Header";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";

const GuessingGame = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [currentScreen, setCurrentScreen] = useState('start');
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);

  const getTitle = () => {
    if (currentScreen === 'start') return 'Pick a Number';
    if (currentScreen === 'game') return `The computer used ${numberOfAttempts} attempts`;
    if (currentScreen === 'gameOver') return 'Congratulations!';

    return '';
  };
  const headerTitle = getTitle();

  const addAttempt = () => setNumberOfAttempts(numberOfAttempts + 1);

  const restartGame = () => {
    setCustomerNumber('');
    setNumberOfAttempts(0);
    setCurrentScreen('start');
  };

  return (
    <View>
      <Header title={headerTitle} />

      {
        currentScreen === 'start' &&
        <StartScreen
          customerNumber={customerNumber}
          setCustomerNumber={setCustomerNumber}
          setCurrentScreen={setCurrentScreen}
        />
      }

      {
        currentScreen === 'game' &&
        <GameScreen
          customerNumber={customerNumber}
          addAttempt={addAttempt}
          setCurrentScreen={setCurrentScreen}
        />
      }

      {
        currentScreen === 'gameOver' &&
        <GameOverScreen
          numberOfAttempts={numberOfAttempts}
          restartGame={restartGame}
        />
      }
    </View>
  );
};

GuessingGame.navigationOptions = {
  title: 'GuessingGame'
};

export default GuessingGame;
