import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Principal from '../screens/Principal';
import SearchDev from '../screens/SearchDev';
import SkillForm from '../screens/SkillForm';
import YourSkills from '../screens/YourSkills';
import UserProfile from '../screens/UserProfile';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen options={{headerShown: false}} name="Principal" component={Principal} />
    <AppStack.Screen name="SearchDev" component={SearchDev} />
    <AppStack.Screen name="SkillForm" component={SkillForm} />
    <AppStack.Screen name="YourSkills" component={YourSkills} />
    <AppStack.Screen name="UserProfile" component={UserProfile} />
  </AppStack.Navigator>
);

export default AppRoutes;