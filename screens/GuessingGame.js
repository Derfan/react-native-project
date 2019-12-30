import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/GuessingGame/Header";
import StartScreen from "../components/GuessingGame/StartScreen";
import GameScreen from "../components/GuessingGame/GameScreen";
import GameOverScreen from "../components/GuessingGame/GameOverScreen";

const GuessingGame = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [currentScreen, setCurrentScreen] = useState('start');
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);

  const titles = {
    start: 'Pick a Number',
    game: `The computer used ${numberOfAttempts} attempts`,
    gameOver: 'Congratulations!',
  };

  const addAttempt = () => setNumberOfAttempts(numberOfAttempts + 1);

  const startGame = () => setCurrentScreen('game');

  const finishGame = () => setCurrentScreen('gameOver');

  const restartGame = () => {
    setCustomerNumber('');
    setNumberOfAttempts(0);
    setCurrentScreen('start');
  };

  return (
    <View style={styles.screen}>
      <Header>{titles[currentScreen]}</Header>

      <View style={styles.content}>
        {
          currentScreen === 'start' &&
          <StartScreen
            customerNumber={customerNumber}
            setCustomerNumber={setCustomerNumber}
            onStartGame={startGame}
          />
        }

        {
          currentScreen === 'game' &&
          <GameScreen
            customerNumber={customerNumber}
            addAttempt={addAttempt}
            onFinishGame={finishGame}
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
    </View>
  );
};

GuessingGame.navigationOptions = {
  title: 'GuessingGame'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20
  },
});

export default GuessingGame;
