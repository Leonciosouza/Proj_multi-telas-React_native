import { router, Stack, useRouter} from 'expo-router';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
//import { useState } from 'react';
import { useRef } from 'react';
import { useLocalSearchParams } from '../node_modules/expo-router/build/hooks';

interface ICliente {
    nome: string;
    email: string;
    idade: string;
}

export default function Home() {
    // const params = useLocalSearchParams<ICliente>();   
    const router = useRouter();
    /*
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    */

    const nomeRef = useRef('');
    const emailRef = useRef('');
    const idadeRef = useRef('');

    return (
       <View style={styles.container}>
        <Text style={styles.title}>Formulário</Text>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => (nomeRef.current = text)}
            placeholder="Digite seu nome"
            />

        <Text style={styles.label}>Email:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => (emailRef.current = text)}
            placeholder="Digite seu email"
            keyboardType="email-address"
            />

        <Text style={styles.label}>Idade:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => (idadeRef.current = text)}
            placeholder="Digite sua idade"
            keyboardType="numeric"
            />
            <View style={styles.button}>
                <Button
                    title="Enviar"
                    onPress={() => {
                        // Navegação via URL com query params.
                        router.push(`/details?nome=${encodeURIComponent(nomeRef.current)}&email=${encodeURIComponent(emailRef.current)}&idade=${encodeURIComponent(idadeRef.current)}`
                    );
                    }}
                    color="#007BFF"
                />
            </View>
       </View>
      );
   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        backgroundColor: '#DAA520',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#7FFF00',
    },
    input: {
        height: 35,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        width: '22%',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    button: {
        marginTop: 15,
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '22%',
        alignSelf: 'center',

    }
});