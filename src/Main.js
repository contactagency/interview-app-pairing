import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import TalentFeed from './screens/talentfeed';
import TalentScreen from './screens/talent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TalentFeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Talent List" component={TalentFeed} />
      <Stack.Screen name="Talent" component={TalentScreen} />
    </Stack.Navigator>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home';
          } else if (route.name === 'Talent List') {
            iconName = focused ? 'notebook-outline' : 'notebook';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Talent List" component={TalentFeedStack} />
    </Tab.Navigator>
  );
}

const Main = () => {

  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
};

export default Main;
