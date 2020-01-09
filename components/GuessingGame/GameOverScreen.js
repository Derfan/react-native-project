import React, { Fragment } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";
import image from '../../assets/mountain-peak.png';

const GameOverScreen = ({ numberOfAttempts, restartGame }) => {
  return (
    <Fragment>
      <CustomText style={styles.title}>Game Over!</CustomText>

      <View style={styles.pictureContainer}>
        <Image
          source={image}
          style={styles.picture}
        />
      </View>

      <CustomText style={styles.message}>
        Computer spent <CustomText type="title" style={styles.messageBold}>{numberOfAttempts}</CustomText> attempts to guess a number
      </CustomText>

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
  },
});

export default GameOverScreen;
