import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from "../common/CustomText";

const Header = ({ children }) => (
  <View style={styles.header}>
    <CustomText type="title" style={styles.title}>{children}</CustomText>
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
