import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from "react-native";

export default function Pagina6Screen() {
  const [datos, setDatos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function leer() {
      try {
        const resp = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
        const json = await resp.json();
        setDatos(json);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    }
    leer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina5Screen</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={datos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name.first}</Text>
              <Text style={styles.itemOccupation}>{item.occupation}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemOccupation: {
    fontSize: 14,
    color: '#666',
  },
});
