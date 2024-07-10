import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Routes/PublicRoutes/ScreenNav';
import DrawerNavigatorPage from './src/Routes/DrawerNavigation/DrawerNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/store/Store';

const App = () => {
  return (

    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <DrawerNavigatorPage />
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
};

export default App;