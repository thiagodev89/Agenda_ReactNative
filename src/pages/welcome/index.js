import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Welcome(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image 
                animation='flipInY'
                source={require('../../assets/logo2.jpg')}
                style={{ width: '100%' }}
                resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Organize seus compromissos de qualquer lugar!</Text>
                <Text style={styles.texto}>Realize o Login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login')}>
                    <Text style={styles.buttonTexto}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        paddingStart: '5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    texto:{
        color: '#a1a1a1',
    },
    button:{
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 50,
        width: '50%',
        paddingVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: '40%',
    },
    buttonTexto:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});