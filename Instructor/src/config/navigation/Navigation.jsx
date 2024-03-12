import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./../../modules/auth/adapters/screens/Login";
import ScreenInitial from "../../modules/auth/adapters/screens/ScreenInitial";
import LoginParticipante from "../../modules/auth/adapters/screens/LoginParticipante";
import Home from "../../modules/home/adapters/screens/Home";

const Stack = createStackNavigator();

export default function Navigation() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenInitial">
        {userLoggedIn ? (
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScreenInitial"
              component={ScreenInitial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="LoginParticipante"
            component={LoginParticipante}
            options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
