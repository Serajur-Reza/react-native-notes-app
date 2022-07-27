import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import NewNote from './components/NewNote';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store.js';
import EditNote from './components/EditNote';
import {PersistGate} from 'redux-persist/lib/integration/react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Radioactive Notes App'}}
            />

            <Stack.Screen
              name="New Note"
              component={NewNote}
              options={{title: 'New Note'}}
            />

            <Stack.Screen
              name="Edit Note"
              component={EditNote}
              options={{title: 'Edit Note'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
