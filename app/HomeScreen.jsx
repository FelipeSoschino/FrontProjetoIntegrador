import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
// Dados mockados para posts
const mockPosts = [
  { id: '1', user: 'João Silva', content: 'Nova música lançada! Ouçam aqui.', image: 'https://via.placeholder.com/300' },
  { id: '2', user: 'Maria Santos', content: 'Dicas para tocar violão?', image: null },
  // Adicione mais posts
];
const HomeScreen = () => {
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.user}>{item.user}</Text>
      <Text style={styles.content}>{item.content}</Text>
      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed de Músicos</Text>
      <FlatList
        data={mockPosts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  post: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 8 },
  user: { fontWeight: 'bold', fontSize: 16 },
  content: { marginVertical: 5 },
  postImage: { width: '100%', height: 200, borderRadius: 8 },
});
export default HomeScreen;