import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Buscar() {

    return (
        <View style={styles.container}>
            <Text>Buscar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})