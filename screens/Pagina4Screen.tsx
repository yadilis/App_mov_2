import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import datos from '../assets/data/libros.json'; 
import Tarjeta2 from '../components/Tarjeta2';

export default function Pagina4Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LIBROS</Text>
      <FlatList
        data={datos.libros} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tarjeta2 informacion={item}  />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
