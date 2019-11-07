import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, TodoWidget, GuessingGame } from './screens';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  TodoWidget: { screen: TodoWidget },
  GuessingGame: { screen: GuessingGame },
});

const App = createAppContainer(MainNavigator);

export default App;
