import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home";
import TalentFeed from "./screens/talentfeed";
import TalentScreen from "./screens/talent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TalentFeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Talent List" component={TalentFeed} />
      <Stack.Screen name="Talent" component={TalentScreen} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-outline" : "home";
          } else if (route.name === "Talent List") {
            iconName = focused ? "notebook-outline" : "notebook";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Talent List" component={TalentFeedStack} />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default Main;
