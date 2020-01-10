import React from "react";
import { Image, StyleSheet, View, ScrollView, FlatList } from "react-native";
import CustomText from "../common/CustomText";
import MainButton from "../common/MainButton";

const Number = ({ value }) => <CustomText type="title" style={styles.messageBold}>{value}</CustomText>;

const GameOverScreen = ({ numberOfAttempts, numberOfCheat, restartGame, customerNumber, pastGuesses }) => (
  <ScrollView>
    <View style={styles.pictureContainer}>
      <Image
        fadeDuration={200}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gold_Cup_icon.svg/1170px-Gold_Cup_icon.svg.png' }}
        style={styles.icon}
        resizeMode="contain"
      />
    </View>

    <MainButton
      title="Restart"
      onPress={restartGame}
      iconName="refresh"
    />

    <CustomText type="title" style={styles.title}>Game statistics:</CustomText>

    <View style={styles.pictureContainer}>
      <Image
        source={require('../../assets/success.png')}
        style={styles.picture}
      />
    </View>

    <View>
      <CustomText style={styles.message}><Number value={customerNumber} /> - Guessed number</CustomText>
    </View>

    <View>
      <CustomText style={styles.message}><Number value={numberOfAttempts} /> - Number of computer attempts</CustomText>
    </View>

    <View>
      <CustomText style={styles.message}><Number value={numberOfCheat} /> - Number of your cheat</CustomText>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  title: {
    marginTop: 35,
    fontSize: 20,
  },
  pictureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 150,
    height: 150,
  },
  picture: {
    width: '100%',
    height: 150,
  },
  message: {
    fontSize: 20,
  },
  messageBold: {
    fontSize: 24,
  },
});

export default GameOverScreen;
