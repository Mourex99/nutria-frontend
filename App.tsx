import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Menu from './src/pages/Menu';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Login" 
        screenOptions={{ 
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#fff',
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Menu" component={Menu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
