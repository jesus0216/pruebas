import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Megusta from "../../modules/auth/adapters/screens/Megusta";

const Stack = createStackNavigator();

export default function MegustaStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Megusta" component={Megusta} options={{ title: 'Megusta' }} />
        </Stack.Navigator>
    )
}