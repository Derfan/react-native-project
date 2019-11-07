import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ data, removeGoal }) => (
  <View style={styles.listContainer}>
    <Text style={styles.message}>Goals to resolve: {data.length}</Text>

    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => <TodoItem todo={item} onDeleteCB={removeGoal} />}
      keyExtractor={({ uid }) => uid}
    />
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  message: {
    textAlign: 'right',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
  }
});

export default TodoList;
