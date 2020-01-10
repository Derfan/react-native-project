import React from "react";
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, type, style = {} }) => (
  <Text style={{ ...styles(type).text, ...style }}>
    {children}
  </Text>
);

const styles = (type = 'body') => {
  const fonts = { title: 'open-sans-bold', body: 'open-sans' };
  const fontFamily = fonts[type];

  return StyleSheet.create({
    text: {
      fontFamily,
    }
  });
};

export default CustomText;
