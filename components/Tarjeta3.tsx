import { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";

const Tarjeta3 = ({ name, image, occupation }: { name: string; image: string; occupation: string }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.occupation}>{occupation}</Text>
    </View>
  );
};

export default function Pagina5Screen() {
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
    <View>
      <Text>Pagina5Screen</Text>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          data={datos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Tarjeta3
              name={item.name.first}
              image={item.image}
              occupation={item.occupation}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  occupation: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});
