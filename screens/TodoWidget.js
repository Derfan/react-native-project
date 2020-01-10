import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import TodoForm from '../components/TodoWidget/TodoForm';
import TodoList from '../components/TodoWidget/TodoList';

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
        title="+ Add New Goal"
        onPress={() => setModalVisibility(true)}
      />

      <TodoForm
        visible={modalVisibility}
        addGoal={addGoal}
        cancelHandler={() => setModalVisibility(false)}
      />

      <TodoList
        data={goalList}
        removeGoal={removeGoal}
      />
    </View>
  );
};

TodoWidget.navigationOptions = {
  title: 'TodoWidget'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 30,
  },
});

export default TodoWidget;
