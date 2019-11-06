import React, { useState } from 'react';
import { Button, StyleSheet, View, Platform } from 'react-native';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoWidget = () => {
  const [goalList, setGoalList] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const addGoal = title => {
    if (!title) return;

    setGoalList(currentGoals => [
      ...currentGoals,
      { uid: Date.now().toString(), title }
    ]);
    setModalVisibility(false);
  };

  const removeGoal = uid => setGoalList(currentGoals => currentGoals.filter(goal => goal.uid !== uid));

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setModalVisibility(true)}
      />

      <TodoForm
        visible={modalVisibility}
        addGoal={addGoal}
        cancelHandler={() => setModalVisibility(false)}
      />

      {
        Boolean(goalList.length) &&
        <TodoList
          data={goalList}
          removeGoal={removeGoal}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...Platform.select({
      android: { paddingTop: 40 },
    }),
  },
});

export default TodoWidget;
