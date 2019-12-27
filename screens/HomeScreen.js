import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to pet RN project</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default HomeScreen;
