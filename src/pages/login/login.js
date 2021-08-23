import React, { Component } from 'react';
import {ImageBackground, Text, StyleSheet,
 View, TouchableOpacity,
Platform, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../home/home';

const Login = (props) => {
    const [email, setEmail] = React.useState();
    const [senha, setSenha] = React.useState();
    
    const onLogin = () => {
        console.log("Teste");
    }
    return(
        <View style={styles.container} >
           <Text style={styles.textTitle} >Faça seu login!</Text>
           <View style={{ marginTop: 20 }} >
               <Text style={styles.textBody} >Seja bem-vindo!</Text>
           </View>
           <View style={styles.containerInputs} >
               <TextInput 
                   style={styles.arround}
                   value={email}
                   onChangeText={() => setEmail({ email })}
                   label='e-mail'
                   autoCapitalize='none'
                   theme={{ colors: { primary: '#ccc', text: '#ccc', placeholder: '#ccc' } }}
                   underlineColor="#1E1C24"/>
               <TextInput
                   value={senha}
                   onChangeText={() => setSenha({ senha })}
                   label='senha'
                   autoCapitalize='none'
                   theme={{ colors: { primary: '#ccc', text: '#ccc', placeholder: '#ccc' } }}
                   underlineColor="#1E1C24"
                   style={styles.arround} />
           </View>
           <View style={styles.buttons} >
               <Button
                   style={styles.button}
                   onPress={onLogin}
                   color='#191720'
               >Entrar</Button>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        padding: 15,
        flex: 1,
        backgroundColor: '#191720'
    },
    textTitle: {
        marginTop: 45,
        fontSize: 30,
        textAlign: 'left',
        color: '#fff',
        fontWeight: 'bold'
    },
    textBody: {
        fontSize: 20,
        marginTop: 2,
        textAlign: 'left',
        color: '#D9E0D7',
    },
    containerInputs: {
        display: 'flex',
        height: 250,
        alignContent: 'center',
        justifyContent: 'center',
    },
    arround: {
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 20,
        backgroundColor: '#423E4F',
        color: '#fff'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        borderRadius: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        marginTop: 2,
        textAlign: 'center',
        color: '#ccc'
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 13,
        borderRadius: 20
    }
})
export default Login;
