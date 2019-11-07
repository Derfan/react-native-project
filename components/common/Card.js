import React from "react";
import { View, StyleSheet, Platform } from 'react-native';

const Card = ({ children, style = {} }) => (
  <View style={{ ...styles.card, ...style }}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
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