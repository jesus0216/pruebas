import React from "react";
import{createStackNavigator} from "@react-navigation/stack";
import LoginParticipante from "../../modules/auth/adapters/screens/LoginParticipante";

const Stack = createStackNavigator();

export default function LoginParticipanteStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="LoginParticipante" component={LoginParticipante} options={{title: 'LoginParticipante'}} />
        </Stack.Navigator>
    )
}