// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './components/Calculator';
import HistoryScreen from './components/HistoryScreen';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://829856f2f45f427743ada3590e3fe752@o4507958062284800.ingest.us.sentry.io/4507958064971776',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
