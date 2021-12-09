import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen options={{headerShown: false}} name="Login" component={Login} />
    <AuthStack.Screen options={{headerShown: false}} name="Register" component={Register} />
  </AuthStack.Navigator>
);

export default AuthRoutes;