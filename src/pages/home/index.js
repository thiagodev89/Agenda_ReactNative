import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}>Olá, Usuário</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.formHeader}>Agenda de Compromissos</Text>
            </View>
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
    formHeader:{
        fontSize: 24,
        marginTop: '10%',
        marginBottom: '5%',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
})