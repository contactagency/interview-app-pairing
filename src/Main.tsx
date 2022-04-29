import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import TalentFeedScreen from "./screens/TalentFeed";
import TalentProfileScreen from "./screens/TalentProfile";
import { TalentStackRoutes } from "./routes";
import { TabBar } from "./components/TabBar";

const TalentStack = createNativeStackNavigator<TalentStackRoutes>();
const Tab = createBottomTabNavigator();

const TalentFeedStack = () => {
  return (
    <TalentStack.Navigator>
      <TalentStack.Screen
        name="TalentFeed"
        component={TalentFeedScreen}
        options={{ title: "Talent List" }}
      />
      <TalentStack.Screen
        name="TalentProfile"
        component={TalentProfileScreen}
        options={{ title: "Talent Profile" }}
      />
    </TalentStack.Navigator>
  );
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Talent" component={TalentFeedStack} />
  </Tab.Navigator>
);

const Main = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
);

export default Main;
