import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Home() {
  return (
    <View>
      <Text style={styles.container}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({

container: {
  
  justifyContent: 'center',
  alignItems: 'center'
}



}  )