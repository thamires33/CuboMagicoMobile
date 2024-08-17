import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar FontAwesome para ícones
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

const Q2 = () => {
  const videoRef = useRef(null); // Referência para o vídeo
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [feedbackMessage, setFeedbackMessage] = useState(''); // Estado para armazenar a mensagem de feedback
  const [feedbackColor, setFeedbackColor] = useState(''); // Estado para armazenar a cor de fundo do modal
  const navigation = useNavigation(); // Hook para navegação

  // Função que lida com a seleção de uma resposta
  const handleAnswer = (answer) => {
    if (answer === 'B') {
      setFeedbackMessage('Resposta correta!');
      setFeedbackColor('green');
    } else {
      setFeedbackMessage('Tente novamente');
      setFeedbackColor('red');
    }
    setModalVisible(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Função para ir para a próxima página
  const handleNextPagePress = () => {
    navigation.navigate('Q3'); // Navegar para a próxima página
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Qual é o animal?</Text>

      <Video
        ref={videoRef}
        source={require('../../assets/videos/aranha.mp4')}
        style={styles.video}
        resizeMode="contain"
        isLooping={true}
        shouldPlay
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNextPagePress}>
        <Icon name="arrow-right" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswer('A')}>
          <Image source={require('../../assets/img/borboleta.png')} style={styles.optionImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswer('B')}>
          <Image source={require('../../assets/img/aranha.png')} style={styles.optionImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => handleAnswer('C')}>
          <Image source={require('../../assets/img/gato.png')} style={styles.optionImage} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={[styles.modalContainer, { backgroundColor: feedbackColor }]}>
          <Text style={styles.modalText}>{feedbackMessage}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={'Home'}>
          <Icon name="home" size={24} color="#333" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={'ProfileScreen'}>
          <Icon name="user" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>

  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Cor de fundo mais suave
    padding: 20,
  },
  questionText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  video: {
    width: '70%',
    height: 250,
    borderRadius: 10, // Arredondar cantos do vídeo
    borderWidth: 2,
    borderColor: '#ddd', // Borda leve
  },
  nextButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#ff6347', // Cor vibrante para o botão
    borderRadius: 50, // Tornar o botão circular
    elevation: 5, // Sombra para efeito de profundidade
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  option: {
    width: 80,
    height: 80,
    borderRadius: 10, // Arredondar cantos das opções
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff', // Fundo branco para as opções
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionImage: {
    width: '100%', // Ajustar largura
    height: '100%', // Ajustar altura
    resizeMode: 'contain', // Garantir que a imagem não seja cortada
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 40,
  },
  modalText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#ff6347', // Cor vibrante para o botão do modal
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
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
    paddingBottom: 10, // Adicionar padding na parte inferior para não sobrepor o conteúdo
  },
  navButton: {
    padding: 10,
  },
});

export default Q2;
