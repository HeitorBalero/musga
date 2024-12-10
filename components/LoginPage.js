import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ImageBackground } from "react-native";
import { auth } from "../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 

export default function Login({ navigation, route }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        if (route?.params?.clearFields) {
            setEmail('');
            setSenha('');
        }
    }, [route?.params]);

    function logar() {
        signInWithEmailAndPassword(auth, email, senha)
            .then(userCredential => {
                const user = userCredential.user;

                if (!user.emailVerified) {
                    console.log("E-mail não verificado:", email);
                    Alert.alert("Atenção", "Por favor, verifique seu e-mail antes de fazer login.");
                    return;
                }
                console.log("Usuário autenticado e verificado:", email);
                navigation.navigate('Routes', { email });
            })
            .catch(error => {
                console.error("Erro de login:", error.message);
                Alert.alert("Erro", error.message);
            });
    }

    return (

        <View style={estilo.container}>
            <ImageBackground resizeMode="cover" style={estilo.fundo} source={require("../assets/fundo.jpg")}>
                <View style={estilo.AlignItens}>

                    <Text style={estilo.titulo}>Login</Text>
                    <TextInput
                        style={estilo.inputTexto}
                        onChangeText={text => setEmail(text)}
                        placeholder="Digite o email."
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={estilo.inputTexto}
                        secureTextEntry={true}
                        onChangeText={text => setSenha(text)}
                        placeholder="Digite a senha."
                    />
                    <TouchableOpacity style={estilo.botaoLogar} onPress={logar}>
                        <Text style={estilo.textoBotaoLogar}>Logar</Text>
                    </TouchableOpacity>

                    <View style={estilo.signView1}>
                        <Text style={estilo.txtSign}>Primeiro acesso</Text>
                        <TouchableOpacity style={estilo.btnSign} onPress={() => navigation.navigate('Signin')}>
                            <Text style={estilo.txtBtnSign}> Clique aqui</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={estilo.signView2}>
                        <Text style={estilo.txtSign}>Esqueceu a senha?</Text>
                        <TouchableOpacity style={estilo.btnSign} onPress={() => navigation.navigate('ForgotPass')}>
                            <Text style={estilo.txtBtnSign}> Clique aqui</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}


const estilo = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    fundo: {

        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    AlignItens: {
        top:'25%' ,
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 50,
        marginBottom: 35,
        textAlign: 'center',
        color: 'white',
    },
    inputTexto: {
        bottom: 20,
        width: 300,
        height: 50,
        textAlign: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 25,
    },
    botaoLogar: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'grey',
        top: 5,
    },
    textoBotaoLogar: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        padding: 7,
    },
    signView1: {
        marginVertical: 15,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding:10,
    },

    signView2: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin:-10
    },
    txtSign: {
        color: 'white',
        fontSize: 16,
        justifyContent: 'center'
    },
    btnSign: {
        justifyContent: 'center'
    },
    txtBtnSign: {
        color: 'lightblue',
        fontSize: 16,
        justifyContent: 'center'
    },
});
