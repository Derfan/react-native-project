import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/GuessingGame/Header";
import StartScreen from "../components/GuessingGame/StartScreen";
import GameScreen from "../components/GuessingGame/GameScreen";
import GameOverScreen from "../components/GuessingGame/GameOverScreen";

const GuessingGame = () => {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [customerNumber, setCustomerNumber] = useState('');
  const [numberOfCheat, setNumberOfCheat] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([]);

  const titles = {
    start: 'Pick a Number',
    game: `The computer used ${pastGuesses.length} attempts`,
    gameOver: 'Congratulations!',
  };

  const addAttempt = pastNumber => setPastGuesses(arr => [pastNumber, ...arr]);

  const addCheat = () => setNumberOfCheat(number => number + 1);

  const startGame = () => setCurrentScreen('game');

  const finishGame = () => setCurrentScreen('gameOver');

  const restartGame = () => {
    setCustomerNumber('');
    setNumberOfCheat(0);
    setCurrentScreen('start');
    setPastGuesses([]);
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
            pastGuesses={pastGuesses}
            addAttempt={addAttempt}
            addCheat={addCheat}
            onFinishGame={finishGame}
          />
        }

        {
          currentScreen === 'gameOver' &&
          <GameOverScreen
            customerNumber={customerNumber}
            numberOfAttempts={pastGuesses.length}
            numberOfCheat={numberOfCheat}
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
