import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
const CreateTopicScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const handleCreate = () => {
    if (!name || !description || !category) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    // Aqui, salve no backend ou estado global
    Alert.alert('Sucesso', 'Tópico criado!');
    navigation.goBack();  // Volta para TopicsScreen
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Tópico</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Tópico"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria (ex.: Rock, Jazz)"
        value={category}
        onChangeText={setCategory}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 8 },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
export default CreateTopicScreen;