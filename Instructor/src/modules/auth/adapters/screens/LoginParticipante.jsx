import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon, Input, Button, Text } from "@rneui/base";
import Logo from "../../../../../assets/img/logoCEL.png";
import { useFonts } from 'expo-font';


 
export default function LoginParticipante({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [fontsLoaded] = useFonts({
    'InriaSans-Regular': require('./../../../../../assets/fonts/InriaSans-Regular.ttf'),
  });
 
  const login = async () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      setShowErrorMessage("");
      setLoading(true); 
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        // Usar el objeto de navegación para redirigir al usuario a la pantalla "Inicio"
        navigation.navigate("Inicio");
      } catch (error) {
        setShowErrorMessage("Usuario o contraseña incorrecta");
      } finally {
        setLoading(false);
      }
    } else {
      setShowErrorMessage("Campos obligatorios");
    }
  };
  
  if (!fontsLoaded) {
    return null; // Renderiza el componente vacío
  }

  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.topLine}></View> 
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
          containerStyle={[styles.input, { maxWidth: 200 }]} 
          keyboardType="email-address"
          errorMessage={showErrorMessage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon
          type="material-community"
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          color="#000000"
          onPress={() => setShowPassword(!showPassword)}
          style={styles.icon}
        />
        <Input
          placeholder="Contraseña"
          onChange={({ nativeEvent: { text } }) => setPassword(text)}
          label=""
          labelStyle={styles.label}
          containerStyle={[styles.input, { maxWidth: 200 }]} // Cambios aquíxd
          secureTextEntry={showPassword}
          errorMessage={showErrorMessage}
        />
      </View>

      <Button
        title="Iniciar"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: '#00947e',
          borderRadius: 5,
        }}
        titleStyle={{ fontSize: 20,
          fontFamily: 'InriaSans-Regular',}}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
          marginBottom: 35,
         
          
        }}
        onPress={() => navigation.navigate('Home')}
      />

   <View style={styles.bottomLine}>
    <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => console.log('Registrarme')}>
            <Text style={[styles.linkText, styles.upperLink]}>Registrarme</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => console.log('¿Olvidaste tu contraseña?')}>
            <Text style={[styles.linkText, styles.lowerLink]}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
    </View>
</View>


<View style={styles.bottomLine}></View> 


      
      <View style={styles.bottomLine}></View> 
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
    position: 'relative', 
  },
  logo: {
    width: 400,
    height: 250,
    marginBottom: 45,
    
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    marginLeft: 1,
  },
  label: {
    color: "#88c040",
    fontSize: 16,
  },
  btnContainer: {
    width: "80%",
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: "#205072",
    borderRadius: 50,
    borderWidth: 3,
  },

 bottomLine: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5, 
  },
  linkContainer: {
    marginHorizontal: 5, 
  },
  linkText: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'underline',
  },
  upperLink: {
   marginBottom: 20, 
  },
  lowerLink: {
    marginBottom: 5, 
  },

  icon: {
    marginRight: 1, 
  },
  welcomeText: {
    marginBottom: 21,
    fontSize: 32,
    color: "#000",
    fontFamily: 'InriaSans-Regular', 
    textAlign: 'center',
  },
});
