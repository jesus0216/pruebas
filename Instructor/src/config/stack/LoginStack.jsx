import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../modules/auth/adapters/screens/Login";

const Stack = createStackNavigator();

export default function LoginStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}