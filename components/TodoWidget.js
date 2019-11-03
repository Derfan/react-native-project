import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Button } from 'react-native';

export default function TodoWidget() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const addTodo = () => {
    const newList = [...todoList, { key: Date.now().toString(), isChecked: false, title }];

    setTodoList(newList);
    setTitle('');
  };
  const removeTodo = (id) => {
    const newList = todoList.filter(item => item.key !== id);

    setTodoList(newList);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="What need to be done?"
        onChangeText={setTitle}
        value={title}
      />

      <Button
        title="Add!"
        onPress={addTodo}
      />

      <FlatList
        data={todoList}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>

            <Button
              title="Remove!"
              onPress={() => removeTodo(item.key)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 18,
  },
});
