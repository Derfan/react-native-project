import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ data, removeGoal }) => (
  <View style={styles.listContainer}>
    <Text>Goals to resolve: {data.length}</Text>

    <FlatList
      data={data}
      renderItem={({ item }) => <TodoItem todo={item} onDeleteCB={removeGoal} />}
      keyExtractor={({ uid }) => uid}
    />
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
});

export default TodoList;
