import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "@rneui/base";
import Logo from "../../../../../assets/img/logoCEL.png";
import { useFonts } from 'expo-font';

export default function ScreenInitial({ navigation }) {
    const [fontsLoaded] = useFonts({
        'InriaSans-Regular': require('./../../../../../assets/fonts/InriaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Renderiza el componente vacío
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            
            <Text style={styles.sesion}>¿Iniciar sesión cómo?</Text>

            <Button
                title="Participante"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                    backgroundColor: '#009475',
                    borderRadius: 8,
                }}
                titleStyle={{ fontSize: 20, fontFamily: 'InriaSans-Regular' }}
                containerStyle={{
                    width: '75%', // Modificado
                    height: 50,
                    marginVertical: 55,
                }}
                onPress={() => navigation.navigate("LoginParticipante")}
            />

            <Button
                title="Instructor"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                    backgroundColor: '#009475',
                    borderRadius: 8,
                }}
                titleStyle={{ fontSize: 20, fontFamily: 'InriaSans-Regular' }}
                containerStyle={{
                    width: '75%', // Modificado
                    height: 50,
                    marginVertical:20,
                }}
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
        position: 'relative', 
    },
    logo: {
        width: 360,
        height: 250,
        marginBottom: 50, 
    },
    sesion: {
        fontSize: 20,
        fontFamily: 'InriaSans-Regular',
        marginBottom: 20,
    },
});
