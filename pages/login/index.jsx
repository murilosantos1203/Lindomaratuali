import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable, Image, ScrollView, KeyboardAvoidingView , TouchableOpacity} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import logomarca from "../../assets/logomenu.png"


export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    useEffect(() => {
    
        if (token !== null) {
            AsyncStorage.setItem('token', token)
                .then(() => {
                    console.log("Token SignIn: ", token)
                    console.log("Token sucesso!")
                })
                .catch((error) => {
                    console.error("Erro ao salvar o token: ", error);
                });
        }
    }, [token])

    const fetchToken = async () => {
        try {
            const response = await axios.post(
                'http:/murilosantos.pythonanywhere.com/api/token/',
                {
                    username: user,
                    password: password
                }
            )
            AsyncStorage.setItem('username', user)
            console.log(response.data.access)
            setToken(response.data.access)
            navigation.navigate('Mapa')

        } catch (error) {
            console.error("Deu Erro:", error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
                <Image source={logomarca} style={styles.logomarca} />
            </View>
            <TextInput
                placeholder='user'
                onChangeText={setUser}
                value={user}
                style={styles.caixa}
                placeholderTextColor="#aaa" 
            />
            <TextInput
                placeholder='password'
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
                placeholderTextColor="#aaa" 
            />

            <Pressable
                style={styles.btnLogin}
                onPress={fetchToken}
            >
                <Text style={{ fontSize: 20, color:"white" }}>Login</Text>
            </Pressable>
            <TouchableOpacity
                    
                    onPress={() => { navigation.navigate('SignUp') }}
                    >
                    <Text style={styles.btnSignIn}>Sign Up</Text>
                </TouchableOpacity>
            
        </ScrollView>
    )
}
