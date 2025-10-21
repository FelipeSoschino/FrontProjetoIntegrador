// Dados mockados para tópicos
const mockTopics = [
  { id: '1', name: 'Rock Nacional', description: 'Discussões sobre bandas brasileiras.', category: 'Rock' },
  { id: '2', name: 'Jazz Improvisação', description: 'Técnicas avançadas de jazz.', category: 'Jazz' },
  // Adicione mais
];
const TopicsScreen = ({ navigation }) => {  // Assumindo React Navigation
  const renderTopic = ({ item }) => (
    <TouchableOpacity style={styles.topic} onPress={() => navigation.navigate('TopicDetail', { topic: item })}>
      <Text style={styles.topicName}>{item.name}</Text>
      <Text style={styles.topicDesc}>{item.description}</Text>
      <Text style={styles.topicCat}>Categoria: {item.category}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tópicos/Comunidades</Text>
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateTopic')}>
        <Text style={styles.createText}>Criar Tópico</Text>
      </TouchableOpacity>
      <FlatList
        data={mockTopics}
        keyExtractor={(item) => item.id}
        renderItem={renderTopic}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  createButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 8, marginBottom: 10 },
  createText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  topic: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 8 },
  topicName: { fontWeight: 'bold', fontSize: 18 },
  topicDesc: { marginVertical: 5 },
  topicCat: { fontStyle: 'italic', color: '#666' },
});
export default TopicsScreen;