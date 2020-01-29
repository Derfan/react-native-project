import React from "react";
import { View, StyleSheet, Platform, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const Card = ({ children, style = {} }) => (
  <View style={{ ...styles.card, ...style }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowWidth * 0.1,
    paddingBottom: windowWidth * 0.05,
    backgroundColor: 'white',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
      },
      android: {
        elevation: 5,
      }
    })
  },
});

export default Card;
