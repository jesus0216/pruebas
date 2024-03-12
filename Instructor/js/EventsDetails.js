// Archivo: EventDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetails = ({ route }) => {
  // Recuperar el parámetro eventTitle de la ruta
  const { eventTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{eventTitle}</Text>
      <Text style={styles.description}>Detalles del evento:</Text>
      {/* Agrega más contenido según tus necesidades */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});

export default EventDetails;