import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MainButton = ({ title, style, onPress, iconName }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={{ ...styles.button, ...style }}>
      {
        Boolean(iconName) && (
          <View style={styles.icon}>
            <FontAwesome name={iconName} color="white" size={18} />
          </View>
        )
      }

      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B80000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default MainButton;
