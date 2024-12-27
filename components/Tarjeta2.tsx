import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

interface Libro {
  id: string;
  titulo: string;
  autor: {
    nombre: string;
    nacionalidad: string;
    año_nacimiento: number;
    año_muerte: number;
  };
  año: number;
  género: string;
  descripcion: string; 
  detalles: {
    imagen_portada: string;
    páginas: number;
    editorial: string;
  };
}

interface Tarjeta2Props {
  informacion: Libro; 
}

export default function Tarjeta2({ informacion }: Tarjeta2Props) {
  function detalles(titulo: string) {
    Alert.alert("📚 Detalles del libro 📚", `El libro se llama ${titulo}`);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => detalles(informacion.titulo)} 
    >
      <Text style={styles.titulo}>{informacion.titulo}</Text>
      <View style={styles.fila}>
        <Image
          source={{ uri: informacion.detalles.imagen_portada }}
          style={styles.img}
        />
        <View style={styles.textContainer}>
          <Text style={styles.autor}>{informacion.autor.nombre}</Text>
          <Text>{informacion.descripcion}</Text> 
          <Text style={styles.detalle}>Género: {informacion.género}</Text>
          <Text style={styles.detalle}>Año: {informacion.año}</Text>
          <Text style={styles.detalle}>Páginas: {informacion.detalles.páginas}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7491f1',
    marginBottom: 15,
    borderRadius: 15,
    padding: 10,
  },
  fila: {
    flexDirection: 'row',
    marginTop: 10,
  },
  img: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  autor: {
    fontSize: 16,
    color: '#fff',
  },
  detalle: {
    fontSize: 12,
    color: '#fff',
  },
});
