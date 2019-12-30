import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ children }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#7297ff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
