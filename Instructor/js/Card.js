// Archivo: Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, imageUrl, description }) => {
  const navigation = useNavigation();

  const handleDetailsPress = () => {
    navigation.navigate('EventDetails', { eventTitle: title });
  };

  const handleParticipantsPress = () => {
    alert('Mostrar lista de participantes');
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleDetailsPress}>
            <Text style={styles.buttonText}>Detalles</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleParticipantsPress}>
            <Text style={styles.buttonText}>Participantes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Resto del código del componente Card

export default Card;