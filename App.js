import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Link, NativeRouter, Route } from "react-router-native";
import screens from './screens';

const App = () => (
  <NativeRouter>
    <SafeAreaView style={styles.container}>
      {
        screens.map(({ path, title }) => (
          <Link key={path} to={path} style={styles.link}>
            <Text>{title}</Text>
          </Link>
        ))
      }
    </SafeAreaView>

    {
      screens.map(({ path, component: Component }) => (
        <Route
          key={path}
          exact={path === '/'}
          path={path}
          component={Component}
        />
      ))
    }
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  link: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default App;
