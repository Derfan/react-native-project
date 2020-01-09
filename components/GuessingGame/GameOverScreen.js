import React, { Fragment } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import CustomText from "../common/CustomText";

const Number = ({ value }) => <CustomText type="title" style={styles.messageBold}>{value}</CustomText>;

const GameOverScreen = ({ numberOfAttempts, numberOfCheat, restartGame, customerNumber }) => {
  return (
    <Fragment>
      <View style={styles.pictureContainer}>
        <Image
          fadeDuration={200}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gold_Cup_icon.svg/1170px-Gold_Cup_icon.svg.png' }}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      <CustomText style={styles.message}>
        Computer spent <Number value={numberOfAttempts} />&nbsp;
        attempts to guess a number <Number value={customerNumber} />,&nbsp;
        you trying to cheat for <Number value={numberOfCheat} /> times.
      </CustomText>

      <View style={styles.pictureContainer}>
        <Image
          source={require('../../assets/success.png')}
          style={styles.picture}
          resizeMode="contain"
        />
      </View>

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
  icon: {
    width: 50,
    height: 50,
  },
  picture: {
    width: '80%',
    height: 300,
    borderRadius: 100,
  },
  message: {
    fontSize: 20,
  },
  messageBold: {
    fontSize: 24,
  },
});

export default GameOverScreen;
