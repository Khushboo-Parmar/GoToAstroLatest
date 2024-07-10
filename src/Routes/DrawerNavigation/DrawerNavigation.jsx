
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions, } from '@react-navigation/native';
import CustomDrawerContent from './CustomDrawerNav';
import StackNavigation from '../PublicRoutes/ScreenNav';

const Drawer = createDrawerNavigator();

const DrawerNavigatorPage = () => {
  return (
      <Drawer.Navigator screenOptions={{
          headerShown: false,
        }}   drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name={` `} component={StackNavigation} />
      </Drawer.Navigator>
  );
}
export default DrawerNavigatorPage;