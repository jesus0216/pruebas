import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenInitial from "../../modules/auth/adapters/screens/ScreenInitial";

const Stack = createStackNavigator();

export default function ScreenInitialStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenInitial" component={ScreenInitial} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}