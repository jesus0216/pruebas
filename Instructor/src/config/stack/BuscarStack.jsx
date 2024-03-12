import React from "react";
import Buscar from "../../modules/auth/adapters/screens/Buscar";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function BuscarStack() {
    return (
       <Stack.Navigator>
        <Stack.Screen name="Buscar" component={Buscar} options={{tittle: 'Buscar'}} />
       </Stack.Navigator>
    )
}