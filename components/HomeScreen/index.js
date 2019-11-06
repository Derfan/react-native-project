import React from "react";
import { Button, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Button
      title="TodoWidget"
      onPress={() => navigate('TodoWidget')}
    />

    <Button
      title="GuessingGame"
      onPress={() => navigate('GuessingGame')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  }
});

HomeScreen.navigationOptions = {
  title: 'RN Project'
};

export default HomeScreen;