import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from "../common/Card";

const TodoList = ({ todo, onDeleteCB }) => (
  <TouchableOpacity onPress={() => onDeleteCB(todo.uid)} activeOpacity={0.8}>
    <Card style={styles.item}>
      <Text>{todo.title}</Text>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
  }
});

export default TodoList;
