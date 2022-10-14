import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/auth';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    const navigation = useNavigation();

    function handleLogin(){
        signIn(email, password);
    }
    
    
    return (
        <View style={styles.container}>

            <Animatable.View animation={'fadeInLeft'} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                
                <Text style={styles.title}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Digite seu Email"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Digite sua Senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Não Possui conta? Cadastrar-se</Text>
                </TouchableOpacity>
                
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',

    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    containerForm:{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
        paddingStart: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 30
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: 'green',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        marginTop: 20
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 25,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1',
    }
})