import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import TodoWidget from './components/TodoWidget';
import GuessingGame from './components/GuessingGame';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  TodoWidget: { screen: TodoWidget },
  GuessingGame: { screen: GuessingGame },
});

const App = createAppContainer(MainNavigator);

export default App;
