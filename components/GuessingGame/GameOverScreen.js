import React, { Fragment } from "react";
import { Button, Text, Image, StyleSheet, View } from "react-native";
import image from '../../assets/mountain-peak.png';

const GameOverScreen = ({ numberOfAttempts, restartGame }) => {
  return (
    <Fragment>
      <Text style={styles.title}>Game Over!</Text>

      <View style={styles.pictureContainer}>
        <Image
          source={image}
          style={styles.picture}
        />
      </View>

      <Text style={styles.message}>
        Computer spent <Text style={styles.messageBold}>{numberOfAttempts}</Text> attempts to guess a number
      </Text>

      <Button
        title="Restart"
        onPress={restartGame}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  pictureContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  picture: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  message: {
    fontSize: 20,
  },
  messageBold: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameOverScreen;
