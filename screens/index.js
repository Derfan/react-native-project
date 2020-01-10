import HomeScreen from './HomeScreen';
import TodoWidget from './TodoWidget';
import GuessingGame from './GuessingGame';

export default [
  { path: '/', component: HomeScreen, title: 'HomeScreen' },
  { path: '/todo-widget', component: TodoWidget, title: 'TodoWidget' },
  { path: '/game-widget', component: GuessingGame, title: 'GuessingGame' },
];
