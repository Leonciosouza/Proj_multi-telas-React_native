import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: 'Details' }}
      />
      <Text style={styles.text2}>Detalhes do Cliente</Text>
      <Text style={styles.text}>Nome: {params.nome}</Text>
      <Text style={styles.text}>Email: {params.email}</Text>
      <Text style={styles.text}>Idade: {params.idade}</Text>

      <View style={styles.button}>
        <Button
          title="Go Back"
          color="#007BFF"
          onPress={() => router.back()} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#FFEBCD',
    },
    text: {
      fontSize: 18,
      marginBottom: 15,
      backgroundColor: '#B8860B',
     
    },
    button: {
      marginTop: 20,
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      width: '22%',
      alignSelf: 'center',
    },
    text2: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#8B4513',
    },
});


