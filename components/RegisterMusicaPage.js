import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { firestore, auth } from '../firebase'; 
import { collection, addDoc } from "firebase/firestore";

export default function RegisterMusic({ navigation }) {
  const [nomeMusica, setNomeMusica] = useState("");
  const [artistaMusica, setArtistaMusica] = useState("");
  const [generoMusica, setGeneroMusica] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");

  const handleAddMusic = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("Usuário não autenticado!");
        Alert.alert("Erro", "Você precisa estar logado para cadastrar uma música.");
        return;
      }

      // Adicionando a música à coleção 'tblMusica' com o usuário autenticado
      await addDoc(collection(firestore, 'tblMusica'), {
        nomeMusica,
        artistaMusica,
        generoMusica,
        anoLancamento,
        userId: user.uid, // Armazenando o ID do usuário para referenciar a música
      });

      Alert.alert("Sucesso", "Música cadastrada com sucesso!");
      navigation.goBack();  
    } catch (error) {
      console.error("Erro ao cadastrar música: ", error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar a música. Tente novamente.");
    }
  };

  return (
    <ImageBackground style={styles.fundo} resizeMode="cover" source={require('../assets/fundo4.jpg')}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastrar Música</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Nome da Música"
            value={nomeMusica}
            onChangeText={setNomeMusica}
          />
          <TextInput
            style={styles.input}
            placeholder="Artista da Música"
            value={artistaMusica}
            onChangeText={setArtistaMusica}
          />
          <TextInput
            style={styles.input}
            placeholder="Gênero da Música"
            value={generoMusica}
            onChangeText={setGeneroMusica}
          />
          <TextInput
            style={styles.input}
            placeholder="Ano de Lançamento"
            value={anoLancamento}
            onChangeText={setAnoLancamento}
          />

          <TouchableOpacity style={styles.btnenviar} onPress={handleAddMusic}>
            <Text style={styles.btntxtenviar}>Cadastrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.btnenviar, styles.btnVoltar]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.btntxtenviar}>Voltar</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundo: {
    flex: 1,
  },
  titulo: {
    color: 'black',
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    fontWeight: '700',
    padding: 8,
    width: 260,
    fontSize: 18,
    borderRadius: 10,
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnenviar: {
    marginTop: 38,
    backgroundColor: '#686868',
    borderColor: '#ffffff',
    borderWidth: 0.6,
    borderRadius: 10,
    padding: 10,
    width: 120,
  },
  btntxtenviar: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});
