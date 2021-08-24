import React, { useState } from 'react';
import {ImageBackground, Text, StyleSheet,
 View, TouchableOpacity,
Platform, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
/*async-storage*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../login/login';


const Register = (props) => {


        const [user, setUser] = useState({
            name: '',
            email: '',
            password: ''
        })

        const saveUser = async () => {
            try{
                await AsyncStorage.setItem(JSON.stringify(user.email), JSON.stringify(user));
                alert('Dados salvos com sucesso');
                props.navigation.navigate('Login');
            }catch(error){
                console.log(error);
            }
        }

        return (
            <View style={styles.container}>
               <Text style={styles.textTitle}>Crie seu registro!</Text>
               <View style={{marginTop: 20}}>
                   <Text style={styles.textBody}>Insira seus dados!</Text>
               </View>
               <View style={styles.containerInputs}>
                   <TextInput
                       value={user.name}
                       onChangeText={name => setUser({...user, name:name })}
                       label='Name'
                       theme={{colors: {primary: '#ccc', text: '#ccc', placeholder: '#ccc'}}}
                       underlineColor='#1E1C24'
                       style={styles.arround}/>
                   <TextInput
                       value={user.email}
                       onChangeText={email => setUser({...user, email: email})}
                       label='E-mail'
                       theme={{colors: {primary: '#ccc', text: '#ccc', placeholder: '#ccc' }}}
                       underlineColor='#1E1C24'
                       style={styles.arround}/>
                   <TextInput
                       value={user.password}
                       onChangeText={senha => setUser({...user, password:senha})}
                       label='senha'
                       theme={{colors: {primary: '#ccc', text: '#ccc', placeholder: '#ccc' }}}
                       underlineColor='#1E1C24'
                       style={styles.arround}/>
               </View>
               <TouchableOpacity
                   style={styles.buttons}>
                   <Button
                       style={styles.button}
                       onPress={saveUser}
                       color='#191720'
                   >Cadastrar</Button>
               </TouchableOpacity>
           </View>
        );
};    
const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        padding: 10,
        flex: 1,
        backgroundColor: '#191720'
    },
    textTitle: {
        marginTop: 20,
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
        height: 350,
        alignContent: 'center',
        justifyContent: 'center',
    },
    arround: {
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 15,
        backgroundColor: '#423E4F',
        color: '#fff'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        borderRadius: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
})

export default Register;