import Corazon from "../../modules/auth/adapters/screens/Corazon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";



const Stack = createNativeStackNavigator();
export default function CorazonStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Corazon" component={Corazon} options={{ title: 'Corazon' }} />
        </Stack.Navigator>
    )    
}