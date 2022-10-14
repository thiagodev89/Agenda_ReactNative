import React, { createContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn(email, password){
        if(email != '' && password != ''){
            if(email == 'adm@gmail.com' && password == '123'){
                setUser({
                    email: email,
                    status: 'Ativo'
                })
                navigation.navigate('Home');
            } else {
                alert("Email ou Senha Inválidos");
            }            
        } else {
            alert("Favor preencha o campo Email e Senha!");
        }        
    }

    function register(nome, email, password){
        if(nome != '' && email != '' && password != ''){
            setUser({
                nome: nome,
                email: email,
                password: password,
                status: 'Ativo'
            })
            navigation.navigate('Home');
        }
    }

    return(
        <AuthContext.Provider value={{ register, signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;