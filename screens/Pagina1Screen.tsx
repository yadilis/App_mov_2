import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina1Screen() {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState("")
  const [ciudad, setCiudad] = useState("")

  function datosAlert(){
    Alert.alert("Mensaje", nombre+ " es de "+ ciudad+ " y tiene "+ edad +" años.");
    setNombre(""); setEdad(""); setCiudad("");
  }

  return (
    <ImageBackground
      source={{ uri: "https://images.pexels.com/photos/4835419/pexels-photo-4835419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
      style={styles.img}
    >
      <View style={styles.contenedor}>
        <TextInput
          placeholder='INGRESAR NOMBRE'
          placeholderTextColor={'#fff'}
          style={styles.input}
          onChangeText={ (texto)=> setNombre(texto) }
          value={ nombre }
        />

        <TextInput
          placeholder='INGRESAR EDAD'
          style={styles.input}
          placeholderTextColor={'#fff'}
          keyboardType='numeric'
          onChangeText={ (texto)=> setEdad( texto )}
          value={ edad }
        />

        <TextInput
          placeholder='INGRESAR CIUDAD'
          style={styles.input}
          placeholderTextColor={'#fff'}
          onChangeText={ (texto)=> setCiudad(texto)}
        />

        <View style={styles.buttonContainer}>
          <Button 
            title='ACEPTAR' 
            onPress={()=> datosAlert()}
            color={'#28a745'} 
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8, 
  },
  input: {
    fontSize: 22,
    height: 50,
    width: "80%",
    color: '#fff',
    backgroundColor: "#333", 
    opacity: 0.85,
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#00cc29', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, 
  },
  contenedor:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    paddingTop: 40, 
  },
  buttonContainer: {
    width: '80%', 
    marginTop: 20,
    borderRadius: 30, 
    overflow: 'hidden', 
  }
})
