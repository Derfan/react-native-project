import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = ({ todo, onDeleteCB }) => (
  <TouchableOpacity onPress={() => onDeleteCB(todo.uid)} activeOpacity={0.8}>
    <View style={styles.item}>
      <Text>{todo.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 18,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default TodoList;
