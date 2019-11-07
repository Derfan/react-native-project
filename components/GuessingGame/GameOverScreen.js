import React from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";
import image from '../../assets/mountain-peak.png';

const GameOverScreen = ({ numberOfAttempts, restartGame }) => {
  return (
    <View>
      <Text>Game Over!</Text>

      <Image
        source={image}
        style={styles.picture}
      />

      <Text>Computer spent {numberOfAttempts} attempts to guess</Text>

      <Button
        title="Restart"
        onPress={restartGame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    width: 250,
    height: 250,
  },
});

export default GameOverScreen;
