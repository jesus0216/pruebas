import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Icon, Input, Button } from "@rneui/base";
import Logo from "../../../../../assets/img/logoCEL.png";
import { useFonts } from 'expo-font';

const signInWithEmailAndPassword = async (email, password) => {
  // Simulación de autenticación exitosa
  return new Promise((resolve, reject) => {
    if (email === "usuario@ejemplo.com" && password === "contrasena123") {
      resolve({ user: { email } });
    } else {
      reject(new Error("Usuario o contraseña incorrecta"));
    }
  });
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [fontsLoaded] = useFonts({
    'InriaSans-Regular': require('./../../../../../assets/fonts/InriaSans-Regular.ttf'),
  });
  const [loading, setLoading] = useState(false);

  const login = async () => {
    const staticEmail = "usuario@ejemplo.com"; // Reemplaza con un correo estático
    const staticPassword = "contrasena123"; // Reemplaza con una contraseña estática

    if (email === staticEmail && password === staticPassword) {
      setShowErrorMessage("");
      setLoading(true);

      try {
        // Simulación de inicio de sesión exitoso
        const user = await signInWithEmailAndPassword(email, password);
        // En un entorno real, deberías utilizar la autenticación real aquí
        // await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("UserLogged");
      } catch (error) {
        console.error(error);
        setShowErrorMessage("Usuario o contraseña incorrecta");
      } finally {
        setLoading(false);
      }
    } else {
      setShowErrorMessage("Usuario o contraseña incorrecta");
    }
  };

  if (!fontsLoaded) {
    return null; // Renderiza el componente vacío
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.welcomeText}>Bienvenido</Text>

      <View style={styles.inputContainer}>
        <Icon
          type="material-community"
          name="account-circle-outline"
          color="#000000"
          style={styles.icon}
        />
        <Input
          placeholder="Usuario"
          onChange={({ nativeEvent: { text } }) => setEmail(text)}
          label=""
          labelStyle={styles.label}
          containerStyle={styles.input}
          keyboardType="email-address"
          errorMessage={showErrorMessage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon
          type="material-community"
          name={showPassword ? "eye-outline" : "eye-off-outline"}
          color="#000000"
          onPress={() => setShowPassword(!showPassword)}
        />
        <Input
          placeholder="Contraseña"
          onChange={({ nativeEvent: { text } }) => setPassword(text)}
          label=""
          labelStyle={styles.label}
          containerStyle={styles.input}
          secureTextEntry={showPassword}
          errorMessage={showErrorMessage}
        />
      </View>

      <Button
        title="Iniciar"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: '#009475',
          borderRadius: 5,
        }}
        titleStyle={{
          fontSize: 20,
          fontFamily: 'InriaSans-Regular',
        }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => console.log('aye')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: 'relative', // Agregue posición relativa al contenedor principal
  },
  logo: {
    width: 400,
    height: 250,
    marginBottom: 45,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    marginLeft: 1,
  },
  label: {
    color: "#88c040",
    fontSize: 16,
  },
  icon: {
    marginRight: 1, // Ajusta el margen derecho del ícono según sea necesario
  },
  welcomeText: {
    marginBottom: 20,
    fontSize: 32,
    color: "#000",
    fontFamily: 'InriaSans-Regular', // Aplicar la fuente personalizada
    textAlign: 'center',
  },
});
