import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function HomeStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
}