import React, { useState } from 'react';
import { Button, View } from 'react-native';
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
    <View>
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

TodoWidget.navigationOptions = {
  title: 'TodoWidget'
};

export default TodoWidget;
