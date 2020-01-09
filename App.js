import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Link, NativeRouter, Route } from "react-router-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import CustomText from "./components/common/CustomText";
import screens from './screens';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={console.log}
    />
  );

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        {
          screens.map(({ path, title }) => (
            <Link key={path} to={path} style={styles.link}>
              <CustomText type='title'>{title}</CustomText>
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
};

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
