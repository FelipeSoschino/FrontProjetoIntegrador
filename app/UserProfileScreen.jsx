import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// Dados mockados para perfil
const mockUser = {
  name: 'João Silva',
  bio: 'Guitarrista apaixonado por rock. Toquei em várias bandas locais.',
  photo: 'https://via.placeholder.com/150',  // Substitua por URI real
  instruments: ['Guitarra', 'Baixo', 'Piano'],
};
const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: mockUser.photo }} style={styles.photo} />
      <Text style={styles.name}>{mockUser.name}</Text>
      <Text style={styles.bio}>{mockUser.bio}</Text>
      <Text style={styles.sectionTitle}>Instrumentos:</Text>
      {mockUser.instruments.map((inst, index) => (
        <Text key={index} style={styles.instrument}>• {inst}</Text>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', alignItems: 'center' },
  photo: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bio: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  instrument: { fontSize: 16, marginBottom: 5 },
});
export default UserProfileScreen;