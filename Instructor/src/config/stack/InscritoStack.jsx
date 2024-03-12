import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inscrito from "../../modules/auth/adapters/screens/Inscrito";

const Stack = createStackNavigator();

export default function InscritoStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Inscrito" component={Inscrito} options={{ title: 'Inscrito' }} />
        </Stack.Navigator>
    )
}