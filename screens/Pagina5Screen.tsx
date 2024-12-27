import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, Alert } from "react-native";

export default function Pagina5Screen() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  useEffect(() => {
    if (numero1 > 100) {
      Alert.alert("Error", "El número 1 no puede ser mayor a 100");
      setNumero1(100);
    }
    if (numero2 < 0) {
      Alert.alert("Error", "El número 2 no puede ser menor a 0");
      setNumero2(0);
    }
  }, [numero1, numero2]);

  function aumentarNumero1() {
    setNumero1(numero1 + 1);
  }

  function aumentarNumero2() {
    setNumero2(numero2 + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Button title="<=" onPress={() => setNumero1(numero1 - 1)} />
        <Text style={styles.txt}>{numero1}</Text>
        <Button title="=>" onPress={aumentarNumero1} />
      </View>


      <View style={styles.fila}>
        <Button title="<=" onPress={() => setNumero2(numero2 - 1)} />
        <Text style={styles.txt}>{numero2}</Text>
        <Button title="=>" onPress={aumentarNumero2} />
      </View>

      <View>
        <Text style={styles.txt}>Suma: {numero1 + numero2}</Text>
        <Text style={styles.txt}>Resta: {numero1 - numero2}</Text>
        <Text style={styles.txt}>Multiplicación: {numero1 * numero2}</Text>
        <Text style={styles.txt}>
          División: {numero2 !== 0 ? (numero1 / numero2).toFixed(2) : "Error (división por 0)"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 30,
    marginHorizontal: 10,
  },
});
