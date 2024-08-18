import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation(); // Inicializar o hook de navegação

  const handleProfile = () => {
    navigation.navigate('ProfileScreen'); // Navegar para a página de perfil
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/img/gato.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIconContainer}>
            <Icon name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Nome</Text>
        <Text style={styles.contactInfo}>email@domain.com | +55 11 4002-8922</Text>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="person-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Editar informações</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Icon name="lock-closed-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Segurança</Text>
        </View>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="help-circle-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="call-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="document-text-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Privacy policy</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#333" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={handleProfile}>
          <Icon name="user" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  contactInfo: {
    fontSize: 14,
    color: '#666',
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    elevation: 1, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff', // Cor de fundo da barra de navegação
    position: 'absolute', // Fixar na parte inferior
    bottom: 0, // Alinhar na parte inferior
    left: 0,
    zIndex: 5, // Deve estar acima de todos os outros elementos
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
