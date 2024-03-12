import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "../../modules/auth/adapters/screens/Perfil";

const Stack = createStackNavigator();

export default function PerfilStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
        </Stack.Navigator>
    )
}