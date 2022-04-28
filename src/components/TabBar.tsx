import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

const Container = styled.View`
  padding-top: 20px;
  padding-bottom: 30px;
  flex-direction: row;
`;

const TabBarText = styled.Text`
  font-size: 12px;
  margin-top: 4px;
`;

export const TabBar = ({ state, navigation }: BottomTabBarProps) => (
  <Container>
    {state.routes.map((route, index) => {
      const focused = state.index === index;

      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      const onPress = () => {
        if (!focused && !event.defaultPrevented) {
          navigation.navigate({ name: route.name, merge: true, params: {} });
        }
      };

      let iconName = "";

      if (route.name === "Home") {
        iconName = focused ? "home-outline" : "home";
      } else if (route.name === "Talent") {
        iconName = focused ? "notebook-outline" : "notebook";
      }

      const color = focused ? "black" : "gray";

      return (
        <TouchableOpacity
          key={index}
          onPress={onPress}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name={iconName} size={20} color={color} />
          <TabBarText style={{ color: color }}>{route.name}</TabBarText>
        </TouchableOpacity>
      );
    })}
  </Container>
);
